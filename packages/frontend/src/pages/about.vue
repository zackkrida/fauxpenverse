<template>
  <VContentPage>
    <h1>
      {{ $t('about.title', { fauxpenverse: 'fauxpenverse' }) }}
    </h1>
    <p>
      {{ $t('about.description.content', { fauxpenverse: 'fauxpenverse' }) }}
    </p>

    <i18n path="about.collection.content" tag="p">
      <template #fauxpenverse>fauxpenverse</template>
      <template #common-crawl>
        <VLink href="https://commoncrawl.org/">Common Crawl</VLink>
      </template>
    </i18n>

    <i18n path="about.planning.content" tag="p">
      <template #fauxpenverse>fauxpenverse</template>
      <template #meta>
        <VLink href="/meta-search">{{ $t('about.planning.meta') }}</VLink>
      </template>
      <template #search>
        <VLink href="https://github.com/zackkrida/fauxpenverse-frontend/">{{
          $t('about.planning.meta')
        }}</VLink>
      </template>
      <template #api>
        <VLink href="https://github.com/zackkrida/fauxpenverse-api/">{{
          $t('about.planning.api', { fauxpenverse: 'fauxpenverse' })
        }}</VLink>
      </template>
      <template #catalog>
        <VLink href="https://github.com/zackkrida/fauxpenverse-catalog/">{{
          $t('about.planning.catalog', { fauxpenverse: 'fauxpenverse' })
        }}</VLink>
      </template>
      <template #community>
        <VLink href="https://make.wordpress.org/fauxpenverse/">{{
          $t('about.planning.community')
        }}</VLink>
      </template>
      <template #working>
        <VLink href="https://github.com/orgs/WordPress/projects/3">{{
          $t('about.planning.working')
        }}</VLink>
      </template>
    </i18n>

    <i18n path="about.transfer.content" tag="p">
      <template #fauxpenverse>fauxpenverse</template>
      <template #creative-commons>
        <VLink
          href="https://creativecommons.org/2021/05/03/cc-search-to-join-wordpress/"
          >Creative Commons</VLink
        >
      </template>
      <template #wordpress>
        <VLink href="https://ma.tt/2021/04/cc-search-to-join-wordpress-org/"
          >WordPress</VLink
        >
      </template>
    </i18n>

    <i18n path="about.declaration.content" tag="p">
      <template #fauxpenverse>fauxpenverse</template>
      <template #terms>
        <VLink href="https://creativecommons.org/terms/">{{
          $t('about.declaration.terms', { fauxpenverse: 'fauxpenverse' })
        }}</VLink>
      </template>
    </i18n>
  </VContentPage>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'

import VLink from '~/components/VLink.vue'
import VContentPage from '~/components/VContentPage.vue'

export default defineComponent({
  name: 'AboutPage',
  components: { VLink, VContentPage },
  head() {
    return {
      title: `${this.$t('about.title', {
        fauxpenverse: 'fauxpenverse',
      })} | fauxpenverse`,
    }
  },
})
</script>
