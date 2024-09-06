type Attribute = {
    name: string;
    value: string;
}
function renderContent(renderInformation) {
    const element: string = renderInformation.element;
    const rootElement: string = renderInformation.root;

    validateElementType(element);

    const content = createRenderableContent(renderInformation);

    renderOnRoot(rootElement, content)

}
function validateElementType(element:string): undefined {
    if (element.toLocaleLowerCase() === "script")
    {
        throw new Error("Invalid element");
    }
}

function createRenderableContent(renderInformation) {
    const tags = createTags(
        renderInformation.element, renderInformation.attributes
    )
    const content = renderInformation.content;
    const template = tags.opening + content + tags.closing;
    return template
}
function createTags(element, attributes) {
    const attributesList = generateAttributesList(attributes)
    const openingTag = buildTag({element, attributes, isOpening:true})
    const closingTag = buildTag({element, attributes, isOpening:false})

    return {opening:openingTag,closing: closingTag}
}

function generateAttributesList(attributes) {
    let attributeList= ''
    for (const attribute of attributes)
    {
        attributeList = `${attributeList} ${attribute.name}="${attribute.value}"`
    }
    return attributeList;
}

function buildTag(tagInformation) {
    const element = tagInformation.element;
    const attributes = tagInformation.attributes;
    const isOpeningTag = tagInformation.isOpening;

    let tag= ""
    if (isOpeningTag)
    {
        tag = `<${element} ${attributes}>`;
    } else
    {
        tag = `</${element}>`;
    }
    return tag;
}

function renderOnRoot(rootElement, template) {
    rootElement.innerHTML = template;
}

