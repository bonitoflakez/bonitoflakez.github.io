---
title: "LeetCode Solutions"
description: "Dump of all leetcode problems I've solved"
pubDate: "Feb 28 2024"
---

### Table of Content

- [Valid Parentheses](#valid-parentheses)
- [Merge Two Lists](#merge-two-lists)

## Valid Parentheses

`easy`

Given a string s containing just the characters `'('`, `')'`, `'{'`, `'}'`, `'['` and `']'`, determine if the input string is valid.

An input string is valid if:

1. Open brackets must be closed by the same type of brackets.
2. Open brackets must be closed in the correct order.
3. Every close bracket has a corresponding open bracket of the same type.

---

**Approach**

- create a stack `storeParentheses` to store parentheses for comparison
- store first parentheses in stack and compare the other one with the one present in stack
- if they match then pop the character from stack else return false (meaning it doesn't have valid parentheses)

**Solution**

```cpp
bool isValid(string s)
{
  stack<char> storeParentheses;

  for (char ch : s)
  {
    if (ch == '(' || ch == '{' || ch == '[')
    {
      storeParentheses.push(ch);
    }
    else if (!storeParentheses.empty() &&
            ((ch == ')' && storeParentheses.top() == '(') ||
            (ch == '}' && storeParentheses.top() == '{') ||
            (ch == ']' && storeParentheses.top() == '[')))
    {
      storeParentheses.pop();
    }
    else
    {
      return false;
    }
  }

  return storeParentheses.empty();
}
```

<span align="right">

([Back to top](#table-of-content))

</span>

## Merge Two Lists

`easy`

You are given the heads of two sorted linked lists `list1` and `list2`.

Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.

**Approach**

- if `list1` is empty return `list2`
- if `list2` is empty return `list1`
- Create a new list to add up both lists
- run a loop till both `list1` and `list2` becomes empty (`nullptr`)
- if `list1` value is smaller than `list2` value add it to `mergedList`
- else add `list2` value to `mergedList`
- if `list1` is not empty (`nullptr`) `current->next` will be `list1` else it'll be eq to `list2`
- Remove head from `mergedList`, delete `mergedList` and return the `result`

> [!NOTE]
> if we don't remove `head` of `mergedList` then the list starts from `0`.

**Solution**

```cpp
ListNode *mergeTwoLists(ListNode *list1, ListNode *list2)
{
  if (list1 == nullptr)
  {
    return list2;
  }
  if (list2 == nullptr)
  {
    return list1;
  }

  ListNode *mergedList = new ListNode(0);
  ListNode *current = mergedList;

  while (list1 != nullptr && list2 != nullptr)
  {
    if (list1->val < list2->val)
    {
      current->next = list1;
      list1 = list1->next;
    }
    else
    {
      current->next = list2;
      list2 = list2->next;
    }
    current = current->next;
  }

  if (list1 != nullptr)
  {
    current->next = list1;
  }
  else
  {
    current->next = list2;
  }

  ListNode *result = mergedList->next;
  delete mergedList;
  return result;
}
```

<span align="right">

([Back to top](#table-of-content))

</span>
