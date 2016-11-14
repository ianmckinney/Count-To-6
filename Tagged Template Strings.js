
console.log(html`<b>${process.argv[2]} says</b>: "${process.argv[3]}"`);


function html(strings, ...tagged) {
    let result = strings[0];


    tagged.forEach((some, index, array)=> {

result += some.replace(/&/g, '&amp;')
                    .replace(/'/g, '&apos;')
                    .replace(/"/g, '&quot;')
                    .replace(/</g, '&lt;')
                    .replace(/>/g, '&gt;')

                + strings[index + 1];
    });
//' | &apos;
//" | &quot;
//< | &lt;
//> | &gt;
//& | &amp;

return result;
    // what goes here?
    // don't forget to return the escaped string!
}
