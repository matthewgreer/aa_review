# Reimplement the bubble sort outlined in the preceding lecture.
# The bubble_sort method should accept an array of numbers and arrange the elements in increasing order.
# The method should return the array.
# Do not use the built-in Array#sort

def bubble_sort(numbers)
  sorted = false
  while !sorted
    sorted = true
    (0...numbers.length - 1).each do |i|
        if numbers[i] > numbers[i + 1]
          numbers[i], numbers[i + 1] = numbers[i + 1], numbers[i]
          sorted = false
        end
    end
  end
  numbers
end


p bubble_sort([2, 8, 5, 2, 6])      # => [2, 2, 5, 6, 8]
p bubble_sort([10, 8, 7, 1, 2, 3])  # => [1, 2, 3, 7, 8, 10]