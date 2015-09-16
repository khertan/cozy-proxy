module.exports = class RegisterImportView extends Mn.ItemView

    className: 'import'

    template: require 'views/templates/view_register_import'

    ui:
        google: '#import-google'


    initialize: ->
        # We create a new stream on the _Import Google_ button that streams the
        # next step as `import_google` in the state machine
        #
        # NOTE: when we'll add more import choices, this code can already
        # streams right step depending on the element `[href]` attribute.
        stream = @$el.asEventStream 'click', @ui.google
            .doAction '.preventDefault'
            .map (e) -> e.target.href.split('=')[1]
        @model.setStepBus.plug stream
