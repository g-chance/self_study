using System;
using System.Collections.Generic;

namespace Practice
{
    public enum Season
    {
        Spring,
        Summer,
        Autumn,
        Winter,

    }
    class Program
    {
        static void Main(string[] args)
        {
            /* ===== Arrays + Lists Exercize ===== */
            // // 1
            // var friends = new List<string>();
            // while (true)
            // {
            //     Console.Write("Please Enter a name: ");
            //     var name = Console.ReadLine();
            //     if (string.IsNullOrWhiteSpace(name))
            //     {
            //         break;
            //     }
            //     friends.Add(name);
            // }
            // if (friends.Count == 1)
            //     Console.WriteLine(friends[0] + " likes your post");
            // else if (friends.Count == 2)
            //     Console.WriteLine("{0} and {1} like your post", friends[0], friends[1]);
            // else
            //     Console.WriteLine("{0}, {1} and {2} others like your post", friends[0], friends[1], friends.Count - 2);
            // // 2
            // Console.Write("Please enter your name: ");
            // var name = Console.ReadLine();
            // var nameArray = new List<char>();
            // foreach (var c in name)
            // {
            //     nameArray.Add(c);
            // }
            // nameArray.Reverse();
            // Console.WriteLine(string.Join("", nameArray));
            // // 3
            // var numbers = new string[5];
            // Console.WriteLine("Please enter 5 unique numbers");
            // var i = 1;
            // while (i < 6)
            // {
            //     Console.Write("Please enter number {0}: ", i);
            //     var num = Console.ReadLine();
            //     if (Array.IndexOf(numbers, num) != -1)
            //     {
            //         Console.WriteLine("You have already entered this number");
            //         continue;
            //     }
            //     numbers[i-1] = num;
            //     i++;
            // }
            // Array.Sort(numbers);
            // foreach (var item in numbers)
            // {
            //     Console.Write(item);
            // }
            // 5
            var numbers2 = new List<char>();
            while (true)
            {
                numbers2 = new List<char>();
                Console.Write("Please provide a list of 5 comma separated numbers: ");
                var input = Console.ReadLine();
                for (var k = 0; k < input.Length; k++)
                {
                    if (input[k].Equals(',') || input[k].Equals(' '))
                    {
                        continue;
                    }
                    numbers2.Add(input[k]);
                }
                if (numbers2.Count < 5)
                {
                    Console.WriteLine("Invalid List");
                }
                else
                {
                    break;
                }
            }
            numbers2.Sort();
            for (var n = 0; n < 3; n++)
                System.Console.WriteLine(numbers2[n]);


            /* ===== Lists ===== */
            // var numbers = new List<int>() {1,2,3,4};
            // numbers.Add(1);
            // numbers.AddRange(new int[3] {5,6,7});
            // foreach (var number in numbers)
            //     System.Console.WriteLine(number);
            // Console.WriteLine(numbers.IndexOf(1));
            // Console.WriteLine(numbers.LastIndexOf(1));
            // Console.WriteLine(numbers.Count);
            // // numbers.Remove(1);
            // for (var i = 0; i < numbers.Count; i++)
            // {
            //     if (numbers[i] == 1)
            //         numbers.Remove(numbers[i]);
            // }
            // foreach (var number in numbers)
            //     System.Console.WriteLine("after removing 1s " + number);
            // numbers.Clear();
            // System.Console.WriteLine("Count after clear " + numbers.Count);
            /* ===== Arrays ===== */
            // int[] nums = new[] {3,7,9,2,14,6};

            // //Length
            // System.Console.WriteLine(nums.Length);
            // //IndexOf()
            // var index = Array.IndexOf(nums, 9);
            // System.Console.WriteLine(index);
            // //Clear()
            // Array.Clear(nums, 0, 2);
            // foreach (var n in nums)
            //     System.Console.WriteLine(n);
            // //Copy()
            // var another = new int[3];
            // Array.Copy(nums, another, 3);
            // foreach (var n in another)
            //     System.Console.WriteLine("copied " + n);
            // //Sort()
            // Array.Sort(nums);
            // foreach (var n in nums)
            //     System.Console.WriteLine("sorted " + n);
            // //Reverse()
            // Array.Reverse(nums);
            // foreach (var n in nums)
            //     System.Console.WriteLine("reversed " + n);
            /* ========== */
            // var random = new Random();
            // const int passwordLength = 10;
            // char[] buffer = new char[passwordLength];
            // for (var i = 0; i < passwordLength; i++)
            //     buffer[i] = (char)random.Next(97, 122);
            
            // var password = new string(buffer);
            // System.Console.WriteLine(password);
            // System.Console.WriteLine('a' + 3);
            /* ========== */
            // while (true)
            // {
            //     System.Console.Write("Type your name: ");
            //     var input = Console.ReadLine();

            //     if (String.IsNullOrWhiteSpace(input))
            //         break;
                
            //     System.Console.WriteLine("@Echo: " + input);
            // }
            // var numbers = new int[] {1,2,3,4};
            // var name = "John Smith";
            // for (var i = 0; i < 10; i++)
            // {
            //     break;
            // }
            // foreach (var c in name)
            // {
            //     System.Console.WriteLine(c);
            // }
            // foreach (var num in numbers)
            // {
            //     System.Console.WriteLine(num);
            // }
            // var k = 0;
            // while (k < 10)
            // {
            //     if (k % 2 == 0)
            //         System.Console.WriteLine(k);
            // }
            /* ========== */
            // var season = Season.Autumn;

            // switch (season)
            // {
            //     case Season.Autumn:
            //         System.Console.WriteLine("It's Autumn");
            //         break;
            //     case Season.Summer:
            //         System.Console.WriteLine("It's Summer");
            //         break;
            //     default:
            //         System.Console.WriteLine("Huh?!");
            //         break;
            // }
            /* ========== */
            // int hour = 10;
            // if (hour > 0 && hour < 12)
            //     System.Console.WriteLine("It's morning");
            // else if (hour >= 12)
            //     System.Console.WriteLine("It's after");
            // else
            //     System.Console.WriteLine("Another time");
            /* ========== */
            // var a = 1;
            // var b = 2;
            // var c = 3;

            // Console.WriteLine(c > b || c == a);
            /* ========== */
            // try
            // {
            //    string str = "true";
            //    bool b = Convert.ToBoolean(str);
            //    System.Console.WriteLine(b);
            // }
            // catch (System.Exception)
            // {
            //    System.Console.WriteLine("MASSIVE FAILURE YOU SUUUUCK");
            // }
        }
    }

}
