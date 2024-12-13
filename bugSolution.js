```javascript
// Correct aggregation pipeline
db.collection.aggregate([
  {$match: { /* ... */ }},
  {$group: { _id: '$field', count: {$sum: 1} }},
  {$sort: {count: -1}},
  {$limit: 10} // Applying $limit after sorting produces the correct top 10
]);
```