In this demo I created a react-table application and included some of its's hooks components. 

To begin with, getting some data was very important to create a table of users. So I used 'json/user' data and saved them into 'Data.js' file. Since I implementented 'Filter' componenent, it was necessary to have some matching data to see the result, so I copy pasted the users and changed the ID, since the ID is required to be unique.

'Filter' only works on the name column. So, we can filter and show data based on the name search, while eliminating the rows we do not need to show after the search. Data is not stored into a database so with every render the page will go to its' default state. 

'Sorting' is available for all columns. The data can be sorted in Asc or Desc way, based on users' preferences.

'Group by' and 'Exapanded' always have a great chemistry when implemented together. 'Group by' is implemented in every column, while 'Expanded' in every row. The purpose of them is group the users's data in a smaller table when the data is not repeated as in the default table. With expand componenent, you can expand data based on the subRows inculded. Since the table is very basic and doesn't include subRows, if you click the expanded feature it will render the next columns data based on the cell chosen. Also, it is very important to include 'groupBy' and 'expanded' into the state of the table.

'Hide and Show Columns' is the next componented implemented. For instance, the address of the user is not needed in the first presentation, so it would be better if we hide the columns included in the Address Header and show them only if the user requires them. The benefit is saving users's additional data and also not overloading the current page shown.

'Pagination' was a bit tricky. I think that pagination is more effective and needing when the data is being pulled by the API. I have implemented a simple pagination code base as a reference, but it currently doesn't work on the table created. Also, I would really recommend 'controlled Pagination', where data will be rendered only when it is needed or required. 

In this demo, I have included a simple style within the JS files.