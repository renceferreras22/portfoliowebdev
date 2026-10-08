const Message = document.getElementById("message")
const Button1 = document.getElementById("loadBtn")
const Button2 = document.getElementById("inputBtn")

const profile = document.getElementById("profile")
const grades = document.getElementById("grades")
const schedule = document.getElementById("schedule")

function loadMessage(){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve("Checking Account...")
        },1000)
    })
}

Button1.addEventListener("click", function(){
    Message.innerHTML = "Loading..."

    loadMessage()

    .then(function(result){
        Message.innerHTML = result

        return new Promise(function(resolve){
            setTimeout(function(){
                resolve("Checking Assets...")
            },1000)
        })
    })

    .then(function(result){
        Message.innerHTML = result

        return new Promise(function(resolve){
            setTimeout(function(){
                resolve("Checking Resources...")
            },1000)
        })
    })

    .then(function(result){
        Message.innerHTML = result

        return new Promise(function(resolve){
            setTimeout(function(){
                resolve("Welcome!")
            },1000)
        })
    })

    .then(function(result){
        Message.innerHTML = result
    })

})

    Button2.addEventListener("click", function(){
    Message.innerHTML = "Loading Dashboard..."

    profile.innerHTML = "Profile: Waiting..."
    grades.innerHTML = "Grades: Waiting..."
    schedule.innerHTML = "Schedule: Waiting..."

    const profilePromise = new Promise(function(resolve){
        setTimeout(function(){
            profile.innerHTML= "Profile: Loaded"
            resolve()
        },1000)
    })

    const gradesPromise = new Promise(function(resolve){
        setTimeout(function(){
            grades.innerHTML = "Grades: Loaded"
            resolve()
        },2000)
    })

    const schedulePromise = new Promise(function(resolve){
        setTimeout(function(){
            schedule.innerHTML = "Schedule: Loaded"
            resolve()
        },3000)
    })

    Promise.all([profilePromise, gradesPromise, schedulePromise])
    
    .then(function(){
        Message.innerHTML = "Dashboard Ready!"
    })
})