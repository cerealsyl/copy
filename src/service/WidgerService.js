export default class WidgerService {

    static myInstance = null;
    Widget = [
        {id: 123, type: 'heading', size: 2, text: 'Hello World'},
        {id: 234, type: 'youtube', src: 'https://youtube.com'},
        {id: 456, type: 'list', items: [
                {text: 'item1'}, {text: 'item2'}, {text: 'item3'}
            ]}
    ]

    createWidget = widget => {
        this.Widget.push(widget)
    }
    findAllWidget = () => {
        return this.Widget
    }

    findWidgetById = widgetId => {
        return this.Widget.find(widget => widget.id !== widgetId)
    }
    deleteWidget = (id) => {
    }

    updateWidget = (id, newWidget) => {
    }
}