// function customRender(ReactElement,container){  
//     /*
//     const domElement = document.createElement(ReactElement.type)
//     domElement.innerHTML = ReactElement.children
//     domElement.setAttribute ('href',ReactElement.props.href)
//     domElement.setAttribute('target',ReactElement.props.target)
//     mainContainer.appendChild(domElement);
//     */
//     const domElement = document.createElement(ReactElement.type)
//     domElement.innerHTML = ReactElement.children
//     for (const prop in ReactElement.props) {
//         // if (prop === "children") continue;    // Optional 
//          domElement.setAttribute(prop,ReactElement.props[prop])
//     }
//      container.appendChild(domElement)
// }




// const ReactElement = {
//     type: "a",
//     props: {
//       href: "https://google.com",
//       target: "_blank"
//     },
//     children: "click me to visit Google"
//   }

//   const mainContainer = document.querySelector("#root")

//   customRender(ReactElement,mainContainer)


function customRender(ReactElement,container){
   /* const domElement = document.createElement(ReactElement.type)
    domElement.innerHTML = ReactElement.Children
    domElement.setAttribute('href',ReactElement.prop)
    domElement.setAttribute('target',ReactElement.traget)

    container.appendChild(domElement)*/

    const domElement = document.createElement(ReactElement.type)
    domElement.innerHTML = ReactElement.Children
    for (const prop in ReactElement.props) {
       domElement.setAttribute(prop, ReactElement.props[prop])
    }

    container.appendChild(domElement)
}

const ReactElement = {
    type: 'a',
    props:{
        href: 'https://google.com',
        traget: '_blank'
    },
    Children: 'click me to visti google'
}

const mainContainer = document.querySelector("#root")

customRender(ReactElement,mainContainer)
