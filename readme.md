#1.ans-
*getElementById("id")** → Select 1 element by id
*getElementsByClassName("class")** → Select many by class (HTMLCollection)
*querySelector("selector")** → Select first match (CSS selector)
*querySelectorAll("selector")** → Select all match (NodeList)


#2.ans-
`let div = document.createElement("div")`
`div.textContent = "Hello"`
`document.body.appendChild(div)`


#3.ans-
Event goes from child to parent step by step.
Example: Click button → then div → then body.


#4.ans-
Add event on parent, handle child events inside it.
Useful because less code, works for new dynamic elements.


#5.ans-
**preventDefault()** → Stop default work (ex: form submit reload)
**stopPropagation()** → Stop event going to parent (stop bubbling)
