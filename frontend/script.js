document.getElementById('fetchData').addEventListener('click', async () => {
    try {
        const response = await fetch('/api/residentialproperties');
        if (!response.ok) throw new Error('Failed to fetch data');
        const data = await response.json();

        const output = document.getElementById('output');
        output.innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
    } catch (error) {
        console.error('Error:', error);
        document.getElementById('output').textContent = 'Error fetching data.';
    }
});
