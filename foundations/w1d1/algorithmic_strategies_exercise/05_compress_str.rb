# Write a method, compress_str(str), that accepts a string as an arg.
# The method should return a new str where streaks of consecutive characters are compressed.
# For example "aaabbc" is compressed to "3a2bc".

def compress_str(str)
  current_char_count = 1
  new_str = ""
  (0..str.length).each do |i|
    if i == str.length - 1 || str[i] != str[i + 1]
      if current_char_count == 1 
        new_str += str[i]
      else
        new_str += current_char_count.to_s + str[i]
      end
      current_char_count = 1
    else
      current_char_count += 1
    end
  end
  new_str
end


p compress_str("aaabbc")        # => "3a2bc"
p compress_str("xxyyyyzz")      # => "2x4y2z"
p compress_str("qqqqq")         # => "5q"
p compress_str("mississippi")   # => "mi2si2si2pi"
