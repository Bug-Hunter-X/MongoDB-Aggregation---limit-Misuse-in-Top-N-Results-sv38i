```javascript
// Incorrect aggregation pipeline causing unexpected results
db.collection.aggregate([
  {$match: { /* ... */ }},
  {$group: { _id: '$field', count: {$sum: 1} }},
  {$sort: {count: -1}},
  {$limit: 10} // Limiting the results to 10 is incorrect if you want to display top 10 documents.
]);
```