# SITS-task-show-hide
SITS - Show/Hide task questions based on the answers to previous questions

Add the attribute data-ttqN to each task question (TTQ) where n is the TTQ sequence

Add the line:

attach_show_hide("data-ttqN","data-ttqM", "ANSWER");

to the JavaScript PageLoad function where N is the sequence of the parent question and M is the sequence of the question you want to show/hide

ANSWER is the parent TTQ answer which will automatically show the child TTQ.

Finaly, add the JavaScriopt to the task element footer inside script tags (<script type="application/javascript"> ... </script>)

Currently this only works with radio group parents.

For example:

Parent TTQ sequence 1 as a Yes/No radio group
Child TTQ sequence 2 of any type.

line in PageLoad()

attach_show_hide("data-ttq1","data-ttq2", "Yes");

The child TTQ will be automatically blanked and hidden on page (unless TTQ1 is defaulted to yes).
When a user selects Yes, TTQ 2 will automatically unhide.

If they subsequently click No to TTQ1, TTQ2 will blank and hide.
