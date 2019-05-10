$(document).ready(function() {
    $("#desc").click(function() {
        $(".popup-elem").addClass("visible");

        $("#close").click(function() {
            $(".popup-elem").removeClass("visible");
        });
    });

    var tasknum = 1;
    $("#add").click(function() {
        $(".task-list").append("<ul>Task no. " + tasknum + "</ul>");
        tasknum++;
    });

    $("#remove").click(function() {
        if (tasknum > 1) {
            $("ul")
                .last()
                .remove();
            tasknum--;
        }
    });

    $("#clear").click(function() {
        $(".task-list").empty();
        tasknum = 1;
    });
});
