document.body.style.width = `${document.documentElement.clientWidth}px`
const widthWeb=innerWidth
let initial =0
const tTYDataBank=[
    ["5 Years Old", "If you’re wondering why the title is \"5 Years Old\" yet I have baby pictures here, it’s because this section covers the range from 0 to 5 years old, a time I don’t remember much of. However, I do remember exploring the fields in Atimonan, Quezon. I’d get lost in the forest, play with animals, and turn anywhere into my playground. It was a time when my curiosity was at its peak. Though it saddens me that so much has changed since then. Some parts of the forest are now gone, the nearby hill is no longer a hill, the rice fields have been halved, and my family’s ownership may be revoked in the near future. How times have changed.","./images/aboutMePIcs/TTYimg1.png"],
    ["13 Years Old","This was the time when I went with the flow and did what I was told. Want to join the Rondalla band? Not interested? Doesn’t matter, you’re doing it anyway. Want to try folk dancing? Still not interested? Do it anyway. Don’t get me wrong—I eventually found enjoyment in these activities, but I wasn’t exactly passionate about them at the time. It was more about my curiosity, wanting to try whatever came my way. If I didn’t like it after giving it a go, I’d quit right away. At least I had some standards. Beyond that, I don’t remember much from back then, but I did get to explore a variety of extracurricular activities. I learned how to folk dance, played chess and sci dama, and even got into some math-related games like Krypto. These experiences helped me develop skills that I still use today.","./images/aboutMePIcs/TTYimg2.png"],
    ["16 Years Old","High school, weirdly enough, doesn’t stand out in my memory as much as it probably should. Not that there wasn’t anything worth remembering, but I just can’t seem to recall much. Maybe I have a bad memory, but the one thing I do remember clearly is gaming—it was what interested me the most. I didn’t care much about academics or being social; gaming was my life. It wasn’t the best life, but it was mine. Nearly forgot that it was when the pandemic happened. I guesses I was lucky that I survived that one.","./images/aboutMePIcs/TTYimg3.png"],
    ["18 Years Old","Now this is where the real stuff happened. Honestly, the best two years of my life. Senior High School opened up so many opportunities to explore and discover what I really wanted to do. My love for math and science was fortified during this time. Physics, calculus, statistics, and chemistry quickly became my favorites, no doubt. Ironically, though, as a Pilipino, I really struggled with anything related to Filipino subjects—be it Piling Larang or Pagbabasa at Pagsusuri. Still, I had the chance to develop so many valuable skills through various projects: editing, writing, filming, photography, management, and more.","./images/aboutMePIcs/TTYimg4.png"],
    ["Today","Looking back now, there’s so much that’s happened in my life. I remember a lot from senior high school—probably due to recency bias—but as of now, I’m not really sure what the future holds. I still struggle with many aspects of my life, especially since things started to change in ways I didn’t expect. There’s so much I want to do, yet so little time. I Never could’ve imagined I wanted more time than sleep","./images/aboutMePIcs/TTYimg5.png"]
]

function change(num) {
    initial+=num
    if (initial>4) initial =0
    if (initial<0) initial =4
    switchCurrent()
    ifButtonBeVisible()
    document.getElementById("ThroughTheYearsTextTitle").innerHTML=tTYDataBank[initial][0]
    document.getElementById("ThroughTheYearsTextBody").innerHTML=tTYDataBank[initial][1]
    document.getElementById("ThroughTheYearsImagePic").src=tTYDataBank[initial][2]

    if (document.getElementById("ThroughTheYearsTextBody").scrollHeight<=document.getElementById("ThroughTheYearsTextBody").clientHeight) {
        document.getElementById("ThroughTheYearsTextBody").style.scrollbarWidth="none"
    } else {
        document.getElementById("ThroughTheYearsTextBody").style.scrollbarWidth="auto"
    }
}

function prevButton() {
    change(-1)
}

function nextButton() {
    change(1)
}

let tTYButton=[
    "tTYButton1","tTYButton2","tTYButton3","tTYButton4","tTYButton5"
]

function switchCurrent() {
    for (let i = 0; i < tTYButton.length; i++) {
        document.getElementById(tTYButton[i]).src="./images/aboutMePIcs/buttonUnselected.svg"
    }
    document.getElementById(tTYButton[initial]).src="./images/aboutMePIcs/buttonSelected.svg"
}

function ifButtonBeVisible() {
    if (initial==0) {
        document.getElementById("upButton").style.display="none"
    } else {document.getElementById("upButton").style.display="block"}
    
    if (initial==4) {
        document.getElementById("downButton").style.display="none"
    } else {document.getElementById("downButton").style.display="block"}
}


let rARDataBank=[
    ["Atimonan, Quezon (My First Home)","A place where I could find peace. Whenever I feel stressed or unease, I always feel the urge to return to where I came from—Atimonan, Quezon. Life was simple back then. Surrounded by nature, breathing fresh air, and having endless space to play. It’s a shame I couldn’t explore more as a kid. I can’t help but feel there are still mysteries waiting to be uncovered there.","./images/aboutMePIcs/RaRImg1.svg","./images/aboutMePIcs/RaRImg2.svg","./images/aboutMePIcs/RaRImg3.svg","./images/aboutMePIcs/RaRImg4.svg","./images/aboutMePIcs/RaRImg5.svg"],
    ["Mauban, Quezon (After The Move)","Well, this isn’t my “real” hometown, but it’s where I grew up. I still remember when this house wasn’t a two-story building, nor made of metal and concrete. But this wasn’t the first house I lived in Mauban—there were two others before this one. Although my time in them was brief, lingering memories remain. I can vaguely recall what those houses looked like from the outside, but the interiors are a blur. I may have moved around a lot, but it’s still this place that shaped me into who I am today.","./images/aboutMePIcs/mauban1.svg","./images/aboutMePIcs/mauban2.svg","./images/aboutMePIcs/mauban3.svg","./images/aboutMePIcs/mauban4.svg","./images/aboutMePIcs/mauban5.svg"],
    ["Batangas City, Batangas (Far From Home)","I’ve only recently moved to Batangas, and I’m still getting used to my surroundings. Honestly, I’m still adjusting to this new chapter of my life. I miss my old home and often find myself longing to go back. But alas, I have to push through if I want to finish college.","./images/aboutMePIcs/batangas1.svg","./images/aboutMePIcs/batangas2.svg","./images/aboutMePIcs/batangas3.svg","./images/aboutMePIcs/batangas4.svg","./images/aboutMePIcs/batangas5.svg"]
]

function changeTo(num) {
    document.getElementById("RaRDisplaySubSectionTitle").innerHTML=rARDataBank[num][0]
    document.getElementById("RaRDisplaySubSectionBody").innerHTML=rARDataBank[num][1]
    document.getElementsByClassName("RaRDisplaySubSectionImg")[0].src=rARDataBank[num][2]
    document.getElementsByClassName("RaRDisplaySubSectionImg")[1].src=rARDataBank[num][3]
    document.getElementsByClassName("RaRDisplaySubSectionImg")[2].src=rARDataBank[num][4]
    document.getElementsByClassName("RaRDisplaySubSectionImg")[3].src=rARDataBank[num][5]
    document.getElementsByClassName("RaRDisplaySubSectionImg")[4].src=rARDataBank[num][6]
    document.getElementsByClassName("RaRDisplaySubSectionImg")[5].src=rARDataBank[num][2]
    document.getElementsByClassName("RaRDisplaySubSectionImg")[6].src=rARDataBank[num][2]
}

//carousel
let carousel="", slides="", dots="", firstSlide="", lastSlide="", slidesNum=0, slideWidth=0, indx=0, idSec=""

let slideMap = new Map ([])
let enabled=1
function test(element, section, direction) {
    if (enabled) {
        enabled=0
        testELem=element
        carousel=element.parentElement.parentElement.children[0].children[0]
        slides=carousel.children
        idSec=element.parentElement.parentElement.parentElement.parentElement.id
        if (!slideMap.has(idSec)) slideMap.set(idSec,Math.abs(direction))
        if (section=="coding") dots=element.parentElement.children[1].children
        else if (section=="gaming") dots=element.parentElement.children[1].children
        if (slides.length>=3&&slides.length<=4) {
            firstSlide = slides[0].cloneNode(true)
            lastSlide = slides[slides.length - 1].cloneNode(true)
            carousel.appendChild(firstSlide)
            carousel.prepend(lastSlide)
            //if (idSec=="GamingSection_AllDayEveryDay") carousel.style.width=widthWeb*5
            slides=element.parentElement.parentElement.children[0].children[0].children
            carousel.style.transform = `translateX(-${slideMap.get(idSec) * 100}%)`
        }
        slidesNum=slides.length
        slideWidth = slides[0].clientWidth
        
        slideMap.set(idSec, slideMap.get(idSec)+direction) 

        carousel.style.transition = 'transform 0.5s ease-in-out'
        carousel.style.transform = `translateX(-${slideMap.get(idSec) * 100}%)`
        carousel.addEventListener('transitionend', function updateSlides() {
            if (slideMap.get(idSec) >= slidesNum - 1) {
                slideMap.set(idSec, 1)
                carousel.style.transition = 'none'
                carousel.style.transform = `translateX(-${slideMap.get(idSec) * 100}%)`
            } else if (slideMap.get(idSec)== 0) {
                slideMap.set(idSec, slidesNum-2)
                carousel.style.transition = 'none'
                carousel.style.transform = `translateX(-${slideMap.get(idSec) * 100}%)`
            }
            enabled=1
        })

        if(idSec!='GamingSection_AllDayEveryDay') {
            for (let i = 0; i < dots.length; i++) {
                dots[i].style.backgroundColor="#373737"
                dots[i].style.opacity="0.5"
            }
            indx=(slideMap.get(idSec)==0)?2:((slideMap.get(idSec)-1)%3)<0?0:(slideMap.get(idSec)-1)%3
            dots[indx].style.backgroundColor="#11aff9"
            dots[indx].style.opacity="1"
        }
    }
    

}

function scrollToTop() {
    document.documentElement.scrollTop = 0;
}

let gameBank=[
    document.getElementById("Genshin_Impact"),
    document.getElementById("Terraria_"),
    document.getElementById("Void_Stranger")
]

let currentGame=0
function changeGame(direction) {
    console.log(direction)
    currentGame+=direction
    currentGame%=3
    if(currentGame<0) currentGame+=3

    gameBank.forEach(game => {
        game.style.display="none"
    });
    gameBank[currentGame].style.display="flex"
}
