<template lang="pug">
div
  .w-divider.my12
  title-link.title1(h2) API

  api.mt0(:items="props" :descriptions="propsDescs" title="Props")

  api(:items="slots" title="Slots")

  api(:items="events" title="Events")
</template>

<script>
import WCard from '@/wave-ui/components/w-card'

const propsDescs = {
  color: 'Applies a color to the card\'s text. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="/colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',
  bgColor: 'Applies a color to the card\'s background. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="/colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',
  shadow: 'Applies a drop shadow to the card container.',
  noBorder: 'Removes the default border from the card container.',
  tile: 'Removes the default border-radius and sets sharp edges on the card container.',
  title: 'Provide a title for the card. Accepts HTML.',
  titleClass: 'Provide a custom CSS class for the card\'s title.',
  contentClass: 'Provide a custom CSS class for the card\'s content.'
}

const slots = {
  title: { description: 'The card title, if the <code>title</code> prop isn\'t flexible enough.' },
  default: { description: 'The card content.' },
  actions: { description: 'Some card actions that will be displayed at the bottom of the card.<br>Has a flex layout.' }
}

const eventsDescs = {}

export default {
  data: () => ({
    propsDescs,
    slots
  }),

  computed: {
    // Reads all the props and events directly from the component, so that as soon as a new prop or event
    // is added it will appear even if no description is yet provided.
    props () {
      return WCard.props
    },
    events () {
      return WCard.emits.reduce((obj, label) => (obj[label] = { description: eventsDescs[label] || '' }) && obj, {})
    }
  }
}
</script>
