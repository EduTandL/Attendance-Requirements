// when the window is completely loaded carry out the following function. This event listener is required for Moodle to read the script and enact it.
window.addEventListener('load', function(){
// define expiration duration as 72 hours
	//const expirationDuration = 1000 * 60 * 60 * 144;
	const expirationDuration = 1000 * 60 * 1;
// save the time of the current login to localStorage
	const savedTime = localStorage.getItem('savedTime');
// get the time of the current login
	const currentTime = new Date().getTime();
// make a constant that refers to when there is no record of a login
	const notAccepted = savedTime == undefined;
// make a constant that refers to when the login has a history, and meets the requirements to display the notification again
	const AcceptedExpired = savedTime != undefined && currentTime - savedTime > expirationDuration;
// Australian attendance requirements notification
	$('.sectionname').before('<div class="container"><div class="modal fade" id="giveThisAName" role="dialog"><div class="modal-dialog"><div class="modal-content"><div class="modal-header bg-dark"><h4 class="modal-title text-white">Attendance Requirements</h4><button type="button" class="close" data-dismiss="modal">&times;</button></div><div class="modal-body"><p>The Faculty of Education has an expectation that you attend all scheduled workshops and tutorials, and participate in all learning activities. All the evidence suggests that student success is greatly impacted by class attendance and participation. If you are unable to attend a scheduled workshop or tutorial, please contact your tutor or unit coordinator, and ensure you have strategies in place to catch up on any missed work.</p></div><div class="modal-footer"><button type="button" class="btn btn-danger btn-block" data-dismiss="modal">Close</button></div></div></div></div></div>');
// if there is not a current login or if the timer set has expired, then show the notification, then store the current time in the browser's local storage for comparison on next login.
  		if(notAccepted || AcceptedExpired){
  			$('#giveThisAName').modal('show');
  			localStorage.setItem("savedTime", currentTime);
  		}
   		else{
      //Do nothing
    		}
	});
