# MongoDB Aggregation: $limit Misuse in Top N Results

This repository demonstrates a common error in MongoDB aggregation pipelines when attempting to retrieve the top N documents. The issue stems from misusing the `$limit` operator, which can lead to inaccurate results if not used carefully.

## Problem
The provided code snippet demonstrates an incorrect aggregation pipeline that aims to retrieve the top 10 documents based on a specific field. However, using `$limit` before `$sort` will produce an incorrect result. 

## Solution
The correct approach is to sort the documents first and then apply the `$limit` operator to select the top N documents.
