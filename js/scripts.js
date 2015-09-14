$(document).ready(function() {

  var incompleteTasks = {tasks:[]}
  var completeTasks = {tasks:[]}


  $("form#task").submit(function(event) {
    event.preventDefault();

    var inputDescription = $("input.description").val();
    var inputDuedate = $("input.due-date").val();
    var inputTaskID = inputDescription.replace(/\s/g, "")
    var task = { description: inputDescription, dueDate: inputDuedate, taskID: inputTaskID}
    incompleteTasks.tasks.push(task)

    $("div.incomplete-tasks").show().append(
        '<div id="individual-task"' + inputTaskID + '>' +
          '<div class="col-md-4">' +
            '<a><span class="task list-group-item">' + task.description + '</span></a>' +
          '</div>' +
          '<div class="col-md-4">' +
            '<a><span class="task list-group-item">' + task.dueDate + '</span></a>' +
          '</div>' +
          '<div class="col-md-4">' +
            '<a class="done"><span class="list-group-item"><span class="glyphicon glyphicon-ok" aria-hidden="true"></span></span></a>' +
          '</div>' +
        '</div>'
      )

      $(".done").last().click(function() {
        $("div.completed-tasks").show();
        $(this).parent().parent().remove();
        $("div.completed-tasks").append($(this).parent().parent());
      })

    $("input.description").val("");
    $("input.due-date").val("");
  });

});
