import Ember from 'ember'

export default Ember.Controller.extend({
  vertical: false,

  actions: {
    click () {
      this.notifications.addNotification({
        message: 'Action sent',
        type: 'success',
        autoClear: true,
        clearDuration: 2000
      })
    },

    toggleVertical () {
      const vertical = this.get('vertical')
      this.set('vertical', !vertical)
    }
  }
})
