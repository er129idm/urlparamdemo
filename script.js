let pageTitleElement;
let outputGridElement;
let projectDisplayElement;

let portfolioCollection = [
  {
    "itemTitle" : "A Cool Website",
    "category" : "code",
    "id" : "coolweb",
    "description" : "Made in the interiors of collapsing stars take root and flourish dream of the mind's eye preserve and cherish that pale blue dot bits of moving fluff kindling the energy hidden in matter.",
    "image" : "https://picsum.photos/id/1/800/600"
  },
  {
    "itemTitle" : "Science network",
    "category" : "code",
    "id" : "science",
    "description" : "With pretty stories for which there's little good evidence Sea of Tranquility the only home we've ever known paroxysm of global death concept of the number one Rig Veda. Dream of the mind's eye courage of our questions dream of the mind's eye the carbon in our apple pies preserve and cherish that pale blue dot from which we spring.",
    "image" : "https://picsum.photos/id/10/800/600"
  },
  {
    "itemTitle" : "Star stuff",
    "category" : "code",
    "id" : "star",
    "description" : "Cosmic fugue concept of the number one Orion's sword at the edge of forever intelligent beings a very small stage in a vast cosmic arena. A very small stage in a vast cosmic arena a very small stage in a vast cosmic arena something incredible is waiting to be known muse about intelligent beings the carbon in our apple pies.",
    "image" : "https://picsum.photos/id/1018/800/600"
  },
  {
    "itemTitle" : "Ash of stellar alchemy",
    "category" : "art",
    "id" : "alchemy",
    "description" : "Invent the universe muse about are creatures of the cosmos not a sunrise but a galaxyrise made in the interiors of collapsing stars made in the interiors of collapsing stars.",
    "image" : "https://picsum.photos/id/1003/800/600"
  },
  {
    "itemTitle" : "Two ghostly white figures",
    "category" : "art",
    "id" : "ghostly",
    "description" : "Extraordinary claims require extraordinary evidence shores of the cosmic ocean birth ship of the imagination globular star cluster rich in mystery. With pretty stories for which there's little good evidence emerged into consciousness shores of the cosmic ocean a mote of dust suspended in a sunbeam prime number a mote of dust suspended in a sunbeam.",
    "image" : "https://picsum.photos/id/1006/800/600"
  },
  {
    "itemTitle" : "Softly dancing star stuff",
    "category" : "art",
    "id" : "dancing",
    "description" : "Emerged into consciousness emerged into consciousness something incredible is waiting to be known made in the interiors of collapsing stars are creatures of the cosmos emerged into consciousness and billions upon billions upon billions upon billions upon billions upon billions upon billions.",
    "image" : "https://picsum.photos/id/101/800/600"
  }
];

document.addEventListener("DOMContentLoaded", function(){

  /* Get page element references */
  pageTitleElement = document.getElementById("pageTitle");
  outputGridElement = document.getElementById("outputGrid");
  projectDisplayElement = document.getElementById("projectDisplay");

  /* Get URL Params */
  /* Determine the requested category (page type) */
  let queryString = window.location.search;
  let urlParams = new URLSearchParams(queryString);
  let urlSection = urlParams.get('section');
  let urlID = urlParams.get('id');

  console.log("urlSection = " + urlSection);
  console.log("urlID = " + urlID);


  if (urlSection != "item") { /// Display project previews in grid

    if (urlSection == "code") {
      pageTitleElement.innerText = "Code Projects:";
    }
    else if (urlSection == "art") {
      pageTitleElement.innerText = "Art Projects:";
    }

    for (let i = 0; i < portfolioCollection.length; i++) {
      if (portfolioCollection[i]["category"] == urlSection || urlSection == "" || urlSection == null){
        createProjectPreview(portfolioCollection[i]);
      }
    }
  }
  else { /// Display individual project
    for (let i = 0; i < portfolioCollection.length; i++) {
      if (portfolioCollection[i]["id"] == urlID) {
        createProjectPage(portfolioCollection[i]);
      }
    }
  }

});


function createProjectPreview(incomingJSON){

  let newPreviewLink = document.createElement("A");
  newPreviewLink.href = "index.html?section=item&id=" + incomingJSON["id"];

  let newPreviewElement = document.createElement("DIV");
  newPreviewLink.appendChild(newPreviewElement);

  let newPreviewTitle = document.createElement("P");
  newPreviewTitle.classList.add("previewTitle");
  newPreviewTitle.innerText = incomingJSON["itemTitle"];
  newPreviewElement.appendChild(newPreviewTitle);

  let newPreviewThumbnail = document.createElement("IMG");
  newPreviewThumbnail.classList.add("thumbnail");
  newPreviewThumbnail.src = incomingJSON["image"];
  newPreviewElement.appendChild(newPreviewThumbnail);

  console.log(newPreviewElement);

  outputGridElement.appendChild(newPreviewLink);

}

function createProjectPage(incomingJSON) {
  pageTitleElement.innerText = incomingJSON["itemTitle"];

  let newProjectElement = document.createElement("DIV");

  let newProjectImage = document.createElement("IMG");
  newProjectImage.classList.add("projectHeroImage");
  newProjectImage.src = incomingJSON["image"];
  newProjectElement.appendChild(newProjectImage);

  let newProjectDescription = document.createElement("P");
  newProjectDescription.classList.add("description");
  newProjectDescription.innerText = incomingJSON["description"];
  newProjectElement.appendChild(newProjectDescription);

  projectDisplayElement.appendChild(newProjectElement);

}
