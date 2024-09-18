$(document).ready(function () {
    $('#dateNew').datetimepicker({
        format: 'L',
        widgetPositioning: {
            vertical: 'bottom', // Adjust this to 'top' if you want the picker to rise upward
        }
    });
    $('#departDateNew').datetimepicker({
        format: 'L',
        widgetPositioning: {
            vertical: 'top', // Adjust this to 'top' if you want the picker to rise upward
        }
    });
});