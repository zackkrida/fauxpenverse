<img src="brand/banner.svg" width="100%"/>

<p align="center">
  <a href="https://github.com/orgs/WordPress/projects/3">Project Board</a> | <a href="https://make.wordpress.org/fauxpenverse/">Community Site</a> | <a href="https://make.wordpress.org/chat/">#fauxpenverse @ Slack</a> | <a href="https://make.wordpress.org/fauxpenverse/handbook/fauxpenverse-handbook/">Handbook</a> | <a href="https://www.figma.com/file/w60dl1XPUvSaRncv1Utmnb/fauxpenverse-Releases?node-id=0%3A1">Releases mockups</a> | <a href="https://www.figma.com/file/GIIQ4sDbaToCfFQyKMvzr8/fauxpenverse-Design-Library?node-id=0%3A1">Design Library</a>
</p>

<p align="center">
  fauxpenverse is a search engine for openly-licensed media.
</p>

# fauxpenverse

fauxpenverse is a powerful search engine for GPL-compatible images, audio, and more. fauxpenverse is live at <a href="https://wordpress.org/fauxpenverse">wp.org/fauxpenverse</a>.

This repository **does not** contain most of the codebase. The code is divided
into individual repositories, and managed via a
[GitHub Project Board](https://github.com/orgs/WordPress/projects/3):

- [Frontend](https://github.com/zackkrida/fauxpenverse-frontend) | The public search engine at <a href="https://wordpress.org/fauxpenverse">wp.org/fauxpenverse</a>, built with Vue.js and Nuxt.js
- [Catalog](https://github.com/zackkrida/fauxpenverse-catalog) | The Apache Airflow-powered system for downloading and storing fauxpenverse's metadata
- [API](https://github.com/zackkrida/fauxpenverse-api) | The Django REST API for querying the catalog data, used by the frontend
- [Browser extension](https://github.com/zackkrida/fauxpenverse-browser-extension) | An extension to view fauxpenverse images directly in your web browser

It is possible we will explore a monorepo structure in the future, but since all
the repos are decoupled from each other and use different technologies, we've
felt it best to keep them distinct.

## Contributing

Pull requests are welcome! Feel free to
[join us on Slack](https://make.wordpress.org/chat/) and discuss the project
with the engineers and community members in the #fauxpenverse channel.

You can also keep in touch with
[progress](https://github.com/orgs/WordPress/projects/3) and the latest updates
to the project with our
[WordPress contributor group](https://make.wordpress.org/fauxpenverse/).

### Helpful links for new contributors

- [Good first issues](https://github.com/issues?q=is%3Aopen+is%3Aissue+repo%3AWordPress%2Ffauxpenverse-catalog+repo%3AWordPress%2Ffauxpenverse+repo%3AWordPress%2Ffauxpenverse-api+repo%3AWordPress%2Ffauxpenverse-frontend+label%3A%22good+first+issue%22+label%3A%22help+wanted%22)
- [fauxpenverse handbook](https://make.wordpress.org/fauxpenverse/handbook/fauxpenverse-handbook/)

## What _is_ in this repo, then?

- This repo contains automation scripts used for various workflows around
  fauxpenverse repositories and processes.
- It acts as the top-level meta repository for fauxpenverse project where
  cross-repo discussions, issues and milestones are defined.
- It is the source of truth for repository meta-files such as common workflows,
  and issue and PR templates.
- It also contains brand assets like logo and icon, along with color and usage
  guidelines for the same.

## Repository structure

- **`automations/`:** This directory contains scripts related to project management or one-off tasks.
  - **`python/`:** This directory contains scripts written in Python.
    - Use this as the working directory when executing Python scripts.
    - Requires [Pipenv](https://pipenv.pypa.io) as the package manager.
  - **`js/`:** This directory contains scripts written in JavaScript.
    - Use this as the working directory when executing JavaScript scripts.
    - Requires [npm](https://www.npmjs.com) as the package manager.
- **`brand/`:** This directory contains brand assets for the project.
- **`rfcs/`:** This directory contains proposals for changes to fauxpenverse.
