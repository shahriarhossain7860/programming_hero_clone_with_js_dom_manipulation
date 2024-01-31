const milestoneData = JSON.parse(data).data
// loading courses milestone data 
loadMilestones = function () {
    const miestones = document.querySelector('.milestones')

    miestones.innerHTML = `${milestoneData.map(function (milestone) {
        return ` <div class="milestone border-b">
                    <div class="flex">
                        <div class="checkbox"><input type="checkbox" /></div>
                        <div onclick = 'openMilestone(this, ${milestone._id})'>
                            <p>
                                ${milestone.name}
                                <span><i class="fas fa-chevron-down"></i></span>
                            </p>
                        </div>
                    </div>
                    <div class="hidden_panel">
                        ${milestone.modules.map(function (module) {
                           return ` <div class="module border-b">
                            <p>${module.name}</p>
                        </div>`
                        }).join('')}
                    </div>
                </div>`
    }).join('')}`
}
openMilestone = function (milestoneElement, id) {
    const currentPanel = milestoneElement.parentNode.nextElementSibling
    const shownPanel = document.querySelector('.show')
    const active = document.querySelector('.active')
    if (active && !milestoneElement.classList.contains('active')) {
        active.classList.remove('active')
    }
    milestoneElement.classList.toggle('active')
    if(!currentPanel.classList.contains('show') && shownPanel)
    shownPanel.classList.remove('show')
    currentPanel.classList.toggle('show')

    showMilestone()
}
loadMilestones()
showMilestone = function (id) {
    const milestoneImage = document.querySelector('.milestoneImage')
    milestoneImage.src = milestoneData[id].image
}