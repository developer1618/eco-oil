export const AddButton = () => import('../..\\components\\AddButton.vue' /* webpackChunkName: "components/add-button" */).then(c => wrapFunctional(c.default || c))
export const AddModal = () => import('../..\\components\\AddModal.vue' /* webpackChunkName: "components/add-modal" */).then(c => wrapFunctional(c.default || c))
export const AdminMenu = () => import('../..\\components\\AdminMenu.vue' /* webpackChunkName: "components/admin-menu" */).then(c => wrapFunctional(c.default || c))
export const CalendarInput = () => import('../..\\components\\CalendarInput.vue' /* webpackChunkName: "components/calendar-input" */).then(c => wrapFunctional(c.default || c))
export const DeleteModal = () => import('../..\\components\\DeleteModal.vue' /* webpackChunkName: "components/delete-modal" */).then(c => wrapFunctional(c.default || c))
export const ExitModal = () => import('../..\\components\\ExitModal.vue' /* webpackChunkName: "components/exit-modal" */).then(c => wrapFunctional(c.default || c))
export const Footer = () => import('../..\\components\\Footer.vue' /* webpackChunkName: "components/footer" */).then(c => wrapFunctional(c.default || c))
export const Loader = () => import('../..\\components\\Loader.vue' /* webpackChunkName: "components/loader" */).then(c => wrapFunctional(c.default || c))
export const NuxtLogo = () => import('../..\\components\\NuxtLogo.vue' /* webpackChunkName: "components/nuxt-logo" */).then(c => wrapFunctional(c.default || c))
export const Pagination = () => import('../..\\components\\Pagination.vue' /* webpackChunkName: "components/pagination" */).then(c => wrapFunctional(c.default || c))
export const PartnerMenu = () => import('../..\\components\\PartnerMenu.vue' /* webpackChunkName: "components/partner-menu" */).then(c => wrapFunctional(c.default || c))
export const Search = () => import('../..\\components\\Search.vue' /* webpackChunkName: "components/search" */).then(c => wrapFunctional(c.default || c))
export const Table = () => import('../..\\components\\Table.vue' /* webpackChunkName: "components/table" */).then(c => wrapFunctional(c.default || c))
export const UploadFile = () => import('../..\\components\\UploadFile.vue' /* webpackChunkName: "components/upload-file" */).then(c => wrapFunctional(c.default || c))

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
