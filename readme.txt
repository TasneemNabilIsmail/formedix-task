For styling scss
  bulma framework: because it is lightweight framework to build responsive app
For infinite scroll:
  ngx-infinite-scroll library


service: flickerService that calls flicker api, flicker key saved in environment
model: interfaces for flickerPhoto type
search-flicker component: search for text, outputs list of photos, initial images perpage 15, calls flickerService,
when scroll, it loads more 15 images
search-cards-list component: takes input list of photos, loop through flicker-card-item component
flicker-card-item component: shows image card, when click on image, shows modal (popup) with same image, but
larger size, with details, title, and farm
