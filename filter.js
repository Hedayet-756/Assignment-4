// console.log('Filter.js added')

// button Selection
const btnAll = document.getElementById('btn-all');
const btnInterview = document.getElementById('btn-interview');
const btnRejected = document.getElementById('btn-rejected');

// Element Selection
const totalCount = document.getElementById('total-applicants');
const interviewCount = document.getElementById('interview-applicants');
const rejectedCount = document.getElementById('rejected-applicants');
const jobCounter = document.getElementById('job-count');
const noJobsMessage = document.getElementById('no-jobs');

// update counters
function updateCounters() {
    const allJobs = document.querySelectorAll('.job-item');
    const interviewJobs = document.querySelectorAll('.job-item[data-status="interview"]');
    const rejectedJobs = document.querySelectorAll('.job-item[data-status="rejected"]');

    totalCount.innerText = allJobs.length;
    interviewCount.innerText = interviewJobs.length;
    rejectedCount.innerText = rejectedJobs.length;
    jobCounter.innerText = allJobs.length;
}

// now update jobs
updateCounters();

// status filter
function filterJobs(status) {
    const jobItems = document.querySelectorAll('.job-item');
    let visibleCount = 0;
    for(item of jobItems){
        if(item.getAttribute('data-status') === status){
            item.classList.remove('hidden');
            visibleCount++;
        }
        else{item.classList.add('hidden')};
    };

    if (visibleCount === 0){
        noJobsMessage.classList.remove('hidden');
    }
    else{
        noJobsMessage.classList.add('hidden')
    }
    
};


// button call
document.getElementById('btn-all').addEventListener('click', function(){
    filterJobs('all')
});

document.getElementById('btn-interview').addEventListener('click', function(){
    filterJobs('interview')
});

document.getElementById('btn-rejected').addEventListener('click', function(){
    filterJobs('rejected')
});


// handle event add

document.addEventListener('click', function(event){
    const card = event.target.closest('.job-item');
    if (!card) return;
    const statusLabel = card.querySelector('.btn-status');

    if (event.target.innerText.toLowerCase() === 'interview') {
        card.setAttribute('data-status', 'interview');
        statusLabel.innerText = 'Interview';
        statusLabel.className = 'text-[16px] text-green-700 uppercase btn bg-green-100';
    } 
    else if (event.target.innerText.toLowerCase() === 'rejected') {
        card.setAttribute('data-status', 'rejected');
        statusLabel.innerText = 'Rejected';
        statusLabel.className = 'text-[16px] text-red-700 uppercase btn bg-red-100';
    }
    else if (event.target.closest('.btn-delete')) {
        card.remove();
        const remainCard = document.querySelectorAll('.job-item');
            if(remainCard.length === 0){
                noJobsMessage.classList.remove('hidden');
            }
    }

    updateCounters();
});


const buttons = [btnAll, btnInterview, btnRejected];

// set a function for button outline
function setBtnColor(clickedBtn) {
    for(btn of buttons){
        btn.classList.remove('btn-primary');
        btn.classList.add('btn-outline');
    }

    clickedBtn.classList.remove('btn-outline');
    clickedBtn.classList.add('btn-primary');
}
setBtnColor(btnAll);

// set color for Every button
btnAll.addEventListener('click', function(){setBtnColor(btnAll);});
btnInterview.addEventListener('click', function(){setBtnColor(btnInterview);});
btnRejected.addEventListener('click', function(){setBtnColor(btnRejected);});
