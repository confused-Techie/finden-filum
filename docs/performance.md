So originally the idea was that by having a complicated setup of key length defined hashmaps, all optionally exported, we could see good performance.

But seems that may not be the case.

For example, with the current list containing about 50 overall extensions:


## Method 1: Key Length Defined Hashmaps, optional import Lookup

BENCHMARKS COMPLETE: 2000 total runs. (In Milliseconds)
{
  maximum_time_taken: 0.5394999980926514,
  minimum_time_taken: 0.0005000829696655273,
  average_time_taken: 0.00185420024394989
}

## Method 2: CSV Loading All Extensions at once, parse into HashMap then preform Lookup

BENCHMARKS COMPLETE: 2000 total runs. (In Milliseconds)
{
  maximum_time_taken: 0.023599982261657715,
  minimum_time_taken: 0.00019991397857666016,
  average_time_taken: 0.00038949936628341676
}

## Method 3: Loading CSV line by line and returning as soon as matches are found

BENCHMARKS COMPLETE: 2000 total runs. (In Milliseconds)
{
  maximum_time_taken: 1.0235000848770142,
  minimum_time_taken: 0.027500033378601074,
  average_time_taken: 0.04007984972000122
}

---

So obviously, somehow the CSV is the fastest method there is for this task. And I should move forward with that in mind.
