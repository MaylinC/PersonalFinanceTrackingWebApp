# REPORT

## What features are completely available.

- Homepage:

  As users enter the website, they will find themselves in the homepage. The navigation bar can be easily accessed on the top portion of the homepage. There they will see two optional links that are for login and registration.

- Login:

  The login page is laid out simply for users to fill in their login information. If users are new to the website, a link below the login button is provided for users to create an account sending them to the registration page.

- Registration:

  Users will be able to create their own account on this page. They are required to fill in the necessary information. Morover, If the user's password and repassword is not matching there will be the popup notification to notify them.

- Dashboard:

  When users have successfully logged in, they will find themselves in the dashboard where they will be able to see the date. Right below the date, Financing tips are provided for the users to be informed, as well as two videos about personal finance. On the top left portion of the finance tips is a link that would open a calculator for users to use. Scrolling down the dashboard, users will find two buttons that would open up the income form and the expenses form. Once users have filled up those forms and submitted them, The income and expenses results will appear next to those forms. The users can also have the option to choose what currency they want to see for their results. The default currency that these results show is Thai Baht. Users have to click the update button in the results box ---> Every Time <--- they fill the form before they use the graph features. The updated amount results will be shown in red text below the results boxes. When the user clicks an update button, the graphs and charts feature will be available according to the information filled in. The graphs component will be seen when the user clicks the “update chart” button. Moreover, as users go to a different page, the graphs will reset when users return to the dashboard, but the information they filled in those forms will still be there, but they would need to click the update button again to see the results. The reason why the graphs reset is for privacy reasons, so that the information can only be seen if they click the update button again. Moreover, as users continue to input their expenses through form submission the table list will update and once their expenses exceed their income and/or budget of the users, an --> pop up notification <-- will pop up notifying the users that their expenses exceeding income budget.

  calculator model code source : https://youtu.be/m1_ih43p24s

  chart source: https://github.com/J-T-McC/vue3-chartjs

- Finance Planner:

  The page is fundamentally used to organize or plan out future finances of the users. A calendar is provided occupying the top portion of the page, where users can change the month accordingly. Users have to click a specific date in the calendar which opens up a “To-do Form” (the date on the form will be modify according to the day,month,year that was chosen). The Expenses To-do form will need information such as the expenses category, expenses, payment type, and amount. After users click the submit button, a table list will appear containing the information of the expense made. As users continuously fill in the to-do list, the table list will update and keep track of those expenses. Users can change the currency of the expenses which will also update the entire list’s calculations with the chosen currency. A calculator is provided next to the list for users to make calculations. If users wander off to another page, the information will still appear when they return to the planner page, unless they delete all information. As the list accumulates, the expenses will be automatically calculated which can be seen above the list. If a planner is completed, users can delete each expense on the list and the calculations will still be updated when an expense is deleted. On the bottom portion of the planner page, there are two pie charts for category and payment type. Beside the pie charts are expense information, the information will appear and be tracked as the list continues to update.

  ------> The information of the finance planner and the dashboard won’t be related or connected in any way. The dashboard information that the user put in are actual expenses made by the user <------

  when they reach on that particular day that the user

  of what they planned to purchase or pay on that particular day.

  css calender source : https://www.w3schools.com

- Notification:

  Users will get their notification which will be popping up on the top right of their screen if that day is the exact date, month, and year that users plan to do their payment on their TO-DO payment list (even if they move to other page there will still be the notification pop up). If Users click "Notification" on the navigation bar, it will also pop the notification once again, if there's no plan for users to complete it will show "No Payment you have to do in TO-DO list TODAY. (You can check this feature by first clicking the notification button when your to-do list is empty or not one that day ["No payment to do Today" will come up], after you can add the current date on to-do list and click to other page to see the notification)

- Expenses Page:

  Information filled up in the dashboard under the income and expenses form will appear on the expenses page in the form of two table lists. The tables also have the option to change the currency which will also alter the information in the tables to the chosen currency. The user has the option to delete a transaction if it's not needed anymore and when it's deleted the total amount will change in the dashboard in the income and expenses result boxes.

- Logout Page:

  User clicks the confirm button to sign out of the website.

## What features are partially available (or still contain bugs).

- Finance page: The pie charts in the finance page are still not as efficient as they should be. Due to the fact that when users have already updated the charts, they won’t be able to update it again even with new information filled out. The charts can only be updated the second time when users revisit the page or must be checked properly.

- Finance page: Calendar can be use properly where the user can go back and forth toward the previous and the next month and year. However, the day of the weeks did not move along with the month and year, since i didn't use the libary for the calendar, it can't be dynamically change. Even though the day doesn't change dynamically, it did not cause any error in other features because we didn't use the day just only the date.

## What features that you cannot complete (explain why so)

- I would like to have an edit button for the listings in the table of expenses. It would allow users to edit the information of the expenses and income rather than refilling the forms again. The reason I am unable to create this feature is because I am unable to write the data back into the firebase. I have attempted various ways to make this happen such as using the firebase documents, searching up for updating and rewriting data back by using axios, etc. I have implemented these methods in the code, but it did not seem to work.

## What features shall be added (if you would have more time)

- I would like to implement a code that would be able to sort out or organize the contents of the table list.

- For the expenses page, it would’ve been great to implement a monthly expenses review pop-up to provide users their monthly financial performance within a month.
