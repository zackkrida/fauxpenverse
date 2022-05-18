// # Generate a weekly report of completed issues per repo
const fetch = require('node-fetch')
const {
  compose,
  zipObj,
  mapAwait,
  prop,
  gte,
  map,
  filter,
  branch,
  entries,
} = require('./utils')

// check for arg
const date = process.argv?.[2]
if (!date) {
  throw new Error(
    'Please call this script with a date in the YYYY-MM-DD format.'
  )
}

// data
const repos = [
  'fauxpenverse',
  'fauxpenverse-frontend',
  'fauxpenverse-api',
  'fauxpenverse-catalog',
]

// internals
const API_ROOT = `https://api.github.com`
const makeIssueUrl = (owner) => (repo) =>
  `${API_ROOT}/repos/${owner}/${repo}/issues?state=closed&since=${date}&per_page=10000`
const makeWpIssueUrl = makeIssueUrl('wordpress')
// this key only has public repo access, i don't care about showing it
const authFetch = (url) =>
  fetch(url, {
    headers: {
      Authorization:
        'Basic emFja2tyaWRhOmdocF9JVHdJM2ZGUkVqSjZkOWRBUFFBOE5pWktwNlU0dXkxRTVFak8=',
    },
  })
const fetchRepoIssues = compose(authFetch, makeWpIssueUrl)
const getJSON = (i) => i.json()
const filterClosed = compose(gte(date), prop('closed_at'))
const logRepo = (repo) =>
  console.log(`\n## [${repo}](https://github.com/wordpress/${repo}) \n`)
const logIssue = (issue) =>
  console.log(`- [#${issue.number} ${issue.title}](${issue.html_url})`)

// run it
mapAwait(fetchRepoIssues)(repos)
  .then(mapAwait(getJSON))
  .then(map(filter(filterClosed)))
  .then(zipObj(repos))
  .then(compose(map(branch(logRepo, map(logIssue))), entries))
  .catch(console.error)
