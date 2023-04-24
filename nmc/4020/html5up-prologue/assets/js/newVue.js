var header = new Vue({
    el: '#header',
    data: {
        yourName: 'Sarah',
        description: "Aspiring UI Developer",
        link1:"Intoduction",
        link2: "My Portfolio",
        link3: "About Me",
        link4: "Contact",
        link5: "Links",
        avatar: "images/me.png"
    }
})

var portfolio = new Vue ({
    el: '#portfolio',
    data: {
        portfolioTitle: "Say something about your portfolio",
        image1: "images/iteration1.jpg",
        imgText1: "Uli Art",
        image2: "images/comp2.jpg",
        imgText2: "Grids Generate Form",
        image3: "images/jammedprinter.jpg",
        imgText3: "A \"Jammed\" Printer",
        image4: "images/Letterform_Exercise_2_template2.jpg",
        imgText4: "Letterform",
        image5: "images/new_Letterform_Exercise_2_template.jpg",
        imgText5: "Letterform v2",
        image6: "images/shaperemix_4.jpg",
        imgText6: "Shape Remix",
       

    }
})
var list = new Vue({
    el: '#list',
    data: {
        link5: 'List',
        header: "Favorite Pefumes" ,
        favorites: ['Si Passione - Armani ', 'I want choo-jimmy choo','Donna born in Roma- Valentino','Mon Guerlain - Guerlain']
    }
})

var conditional = new Vue ({
    el: '#conditional',
    data: {
        teacherName: '',
        birthDate: '',
    }
})

var getColor = new Vue ({
    el: '#function',
    data: {
        bgColor: '',
        w: '',
        colors: ['red', 'green', 'blue'],
        widths: ['400px', '500px', '600px']
    },
    methods: {
        changeColor(color) {
            this.bgColor = color;
        },
        changeWidth(width) {
            this.w = width;
        }
    }
})