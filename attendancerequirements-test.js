// when the window is completely loaded carry out the following function. This event listener is required for Moodle to read the script and enact it.
window.addEventListener('load', function(){
// define expiration duration as 72 hours
	//const expirationDuration = 1000 * 60 * 60 * 144;
	const expirationDuration = 1000 * 60 * 2;
// save the time of the current login to localStorage
	const savedTime = localStorage.getItem('savedTime');
// get the time of the current login
	const currentTime = new Date().getTime();
// make a constant that refers to when there is no record of a login
	const notAccepted = savedTime == undefined;
// make a constant that refers to when the login has a history, and meets the requirements to display the notification again
	const AcceptedExpired = savedTime != undefined && currentTime - savedTime > expirationDuration;
// Australian attendance requirements notification
	$('.sectionname').before(<div class="modal" tabindex="-1" role="dialog">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <p>Modal body text goes here.</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>);
// if there is not a current login or if the timer set has expired, then show the notification, then store the current time in the browser's local storage for comparison on next login.
  		if(notAccepted || AcceptedExpired){
  			$('#giveThisAName').modal('show');
  			localStorage.setItem("savedTime", currentTime);
  		}
   		else{
      //Do nothing
    		}
	});