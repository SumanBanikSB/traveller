$(document).ready(function () {
    // Initialize the datetimepickers
    $('#dateNew').datetimepicker({
        format: 'L',
        widgetPositioning: {
            vertical: 'bottom',
        },
        container: 'body' // Appending to body to avoid overflow issues
    });
    
    $('#departDateNew').datetimepicker({
        format: 'L',
        widgetPositioning: {
            vertical: 'bottom',
        },
        container: 'body'
    });

    // For the second booking section
    $('#date1').datetimepicker({
        format: 'L',
        widgetPositioning: {
            vertical: 'bottom',
        },
        container: 'body'
    });
    
    $('#date2').datetimepicker({
        format: 'L',
        widgetPositioning: {
            vertical: 'bottom',
        },
        container: 'body'
    });
});
