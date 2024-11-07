export default function json2html(data) {
    // Initialize the table with the required data-user attribute
    let html = `<table data-user="gsujithchinnu@gmail.com">\n<thead>\n<tr>`;

    // Collect unique column headers
    const columns = new Set();
    data.forEach(row => {
        Object.keys(row).forEach(key => columns.add(key));
    });

    // Generate table headers
    columns.forEach(column => {
        html += `<th>${column}</th>`;
    });
    html += `</tr>\n</thead>\n<tbody>\n`;
    //j

    // Generate table rows
    data.forEach(row => {
        html += `<tr>`;
        columns.forEach(column => {
            html += `<td>${row[column] || ''}</td>`;
        });
        html += `</tr>\n`;
    });

    // Close table tags
    html += `</tbody>\n</table>`;
    return html;
}
