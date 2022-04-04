import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h2>Question - 1: What is Semantics tag </h2>

            <p>Semantics defines the meaning of words and phrases, i.e.
                Semantic elements= elements with a meaning. Semantic elements have a simple and clear
                meaning for both, the browser and the developer.
                For example:
                In HTML4 we have seen "div", "span" etc. are which are non-semantic elements. They don't
                tell anything about its content.On the other hand, "form", "table", and "article" etc.
                are semantic elements because they clearly define their content.HTML5 semantic
                elements are supported by all major browsers This is so difficult for search
                engines to identify the correct web page content. Now in HTML5 elements
                ("header" "footer" "nav" "section" "article"), this will become easier.
                It now allows data to be shared and reused across applications,
                enterprises, and communities." Semantic elements can increase
                the accessibility of your website, and also helps to create a
                better website structure.</p>

            <h2>Question - 2: What is the difference between inline  and inline-block elements? </h2>
            <p>Difference Between Inline vs Block Any element within a program, document, or message
                is called inline or in-line. When considering HTML, any code built into the web page
                is called inline. And it does not include any code loaded from an external file.
                In any web page, almost all the contents are inline except the CSS and image files.
                Any element that starts a new line for a paragraph and uses the full page or container
                is called a block element. It has one line or multiple lines and possesses a line break
                before and after the elements in the line. CSS can be used for formatting the block
                element  [[[ inline element can begin within  aline of the HTML element and it never starts
                a new line for the HTML and Blocks Cannot begin within a line of the HTML element and it
                always starts the new line of the HTML,,,,, INLINE= the width is defined only till the
                tags og inline extends  and BLOCK= the width is more than inline and is extended till the
                parent element extends,,,,,,,,INLINE= inline elements can break among the lines and
                BLOCK= block elements cannot break among the lines,,,,,,,,]]]</p>
        </div>
    );
};

export default Blogs;