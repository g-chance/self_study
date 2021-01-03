using System;

namespace HelloWorld
{

    enum Direction
    {
        up,
        down,
        left,
        right
    }
    struct Fleegin
    {
        public int num;
    }

    class Program
    {
        /// <summary>
        /// This is an XML comment
        /// </summary>
        /// <returns>void</returns>

        static void Main(string[] args)
        {

            char WhatApricot(string s, ref int i)
            {
                if (i < 0)
                {
                    i = 0;
                    return s[0];
                }
                if (i >= s.Length)
                {
                    i = s.Length - 1;
                    return s[s.Length - 1];
                }
                return s[i];
            }
            int iRef = -22;
            Console.WriteLine(WhatApricot("abcde", ref iRef));
            Console.WriteLine(iRef);

            bool AreArraysEqual(int[] a1, int[] a2)
            {
                for (int i = 0; i < a1.Length; i++)
                {
                    if (a1[i] != a2[i])
                    {
                        return false;
                    }
                }
                return true;
            }
            Console.WriteLine(AreArraysEqual(new int[3], new int[3]));

            void Out(int i1, int i2, out int sum, out int product)
            {
                sum = i1 + i2;
                product = i1 * i2;
            }
            int sum;
            int product;
            Out(5, 6, out sum, out product);
            Console.WriteLine($"{sum} {product}");

            //string Foo(string s1, string s2, string s3)
            //{
            //    return s1 + s2 + s3;
            //}
            //var x = Foo("Bar", "C", "D");
            //Console.WriteLine(x);

            //void Bar(int[] arr, int idx, int val)
            //{
            //    if (idx < arr.Length)
            //    {
            //        arr[idx] = val;
            //    }
            //}
            //var arr2 = new int[3];
            //Bar(arr2, 2, 8);
            //Console.Write(string.Join(",", arr2));

            //string Cat(string s, int idx=0, int length=0)
            //{
            //    if (idx > -1 && idx < s.Length)
            //    {
            //        if (length == 0)
            //        {
            //            return s.Substring(idx);
            //        }
            //        return s.Substring(idx, length);
            //    }
            //    return "";
            //}
            //Console.Write(Cat("Yolo", 1, 2));

            //var x = 1;
            //if (x < 1)
            //{
            //    Console.WriteLine("x is less than 1");
            //}
            //var dir = Direction.up;
            //switch (dir)
            //{
            //    case Direction.up:
            //        Console.WriteLine("Up");
            //        break;
            //    case Direction.down:
            //        Console.WriteLine("Down");
            //        break;
            //    case Direction.left:
            //    case Direction.right:
            //        Console.WriteLine("LR");
            //        break;
            //    default:
            //        break;
            //}
            //string s = "01234567890";
            //if ((s.Length < 5 && s.Length % 2 == 1)
            //    || (s.Length >= 10 && s.Length % 2 == 0))
            //{
            //    Console.WriteLine("do a thing");
            //}
            //if (s.Length < 5)
            //{
            //    if (s.Length % 2 == 1)
            //    {
            //        Console.WriteLine("do");
            //    }
            //}
            //int i = 0;
            //do
            //{
            //    if ((int)s[i] % 2 == 1)
            //    {
            //        Console.Write(s[i]);
            //    }
            //    i++;
            //}
            //while (i < s.Length);
            //for (var j = 0; j < s.Length; j++)
            //{
            //    if ((int)s[j] % 2 == 1)
            //    {
            //        Console.Write(s[j]);
            //    }
            //}
            //foreach (var k in s)
            //{
            //    if ((int) k % 2 == 1)
            //    {
            //        Console.Write(k);
            //    }
            //}
            //for (int a=0; a<5; a++)
            //{
            //    var c = "";
            //    for (int b=0; b<5; b++)
            //    {
            //        if (a != b)
            //        {
            //            Console.
            //                Write("");
            //        }
            //    }
            //}
            //for (int q=1; q < s.Length; q++)
            //{
            //    if (s[q] == s[0])
            //    {
            //        break;
            //    }
            //}
            //int[] myArr = new int[10];
            //int n = 0;
            //while (n < 10)
            //{
            //    myArr[n] = n + 1;
            //    n++;
            //}
            //Console.Write("\n");
            //for (int m = s.Length-1; m > -1; m--)
            //{
            //    Console.Write(s[m]);
            //}
            //var my2DArr = new int[3, 3];
            //for (int v=0; v<3; v++)
            //{
            //    for (int w=0; w<3; w++)
            //    {
            //        //Console.WriteLine($"{v} {w}");
            //        my2DArr[v, w] = v * w;
            //    }
            //}
            //foreach (var item in my2DArr)
            //{
            //    Console.WriteLine(item);
            //}


            //if (args.Length == 0 || (args.Length == 1 && args[0] == "/?"))
            //{
            //    Console.WriteLine("This program expects...");
            //}
            //else if (args.Length == 1)
            //{
            //    Console.WriteLine("error...");
            //}
            //if (!Enum.IsDefined(typeof(Direction), args[0].ToLower()))
            //{
            //    Console.WriteLine("error...");
            //}
            //bool flag;
            //if (!bool.TryParse(args[0], out flag))
            //{
            //    Console.WriteLine("error...");
            //}
            //int intFlag;
            //if (args.Length == 3)
            //{
            //    if (!int.TryParse(args[2], out intFlag))
            //    {
            //        Console.WriteLine("error...");
            //    }
            //}
            //foreach (var item in args)
            //{
            //    Console.WriteLine(item);
            //}


            //Console.WriteLine("What is your first name?: ");
            //var x = Console.ReadLine();
            //Console.WriteLine("What is your middle name?: ");
            //var y = Console.ReadLine();
            //Console.WriteLine("What is your last name?: ");
            //var z = Console.ReadLine();
            //Console.WriteLine($"{x} {y} {z}");
            //Console.WriteLine("Press any key to exit");
            //Console.ReadKey();

            //var sdsd = new Fleegin();
            //var fdfd = new Fleegin();
            //fdfd.num = 999;
            //sdsd.num = fdfd.num;
            //Console.WriteLine(sdsd.num);
            //var x = Mood.Bye;
            //Console.WriteLine(x);
            //Console.WriteLine((int) x);

            //bool a = true;
            //int b;
            //double c = 4.0001;
            //char d = 'F';
            //Console.WriteLine(bool.Parse(a.ToString()));
            //Console.WriteLine(char.Parse(d.ToString()));

            //string x = "Foo";
            //char y = 'f';
            //Console.WriteLine(x.IndexOf(y));
            //bool yInX;
            //if (x.Contains(y))
            //{
            //    yInX = true;
            //}
            //var splitThis = "This is a sentence";
            //Console.WriteLine(splitThis.Split());
            //foreach (var item in splitThis.Split())
            //{
            //    Console.WriteLine(item);
            //}

            //string path = @"c:\foo\bar.txt";
            //Console.WriteLine(path[0].ToString().ToUpper());
            //Console.WriteLine("BLARBLAR " + path.Substring(path.LastIndexOf(@"\") + 1, path.LastIndexOf(".") - (path.LastIndexOf(@"\") + 1)));
            //Console.WriteLine(@"Check\nout\nmy\nstring");
            //Console.WriteLine("Hello " + "Me".Length);
            //var oddStr = "Hellojams";
            //Console.WriteLine(oddStr.Substring(1, oddStr.Length - 1 - 1));
            //Console.WriteLine("is work? " + oddStr.Remove(0, 1).Remove(oddStr.Length - 2, 1));
            //Console.WriteLine($"{oddStr[0]} + {oddStr[oddStr.Length/2]} + {oddStr[oddStr.Length-1]}");
            //Console.WriteLine(oddStr.ToUpper());
            //Console.WriteLine(oddStr.ToLower());

            //var myBool = true;
            //var myInt = int.MaxValue;
            //var myDouble = 1.0;
            //var myChar = 'c';
            //var myString = "Cat";

            //int x = 4, y = 6, z = 7;
            //var z1 = x++;
            //var z2 = ++y;
            //Console.WriteLine($"{x} {y} {z1} {z2}");
            //double a, b, c;
            //a = 4;
            //b = 5;
            //c = 6;
            //a = x;
            //x = (int) a;
            //bool xIsEven = false;
            //if (x % 2 == 0)
            //{
            //    myBool = true;
            //}
            //bool yIsDivBy3 = true;
            //if (y % 3 == 0)
            //{
            //    yIsDivBy3 = false;
            //}
            //var myDouble2 = 4.01343;
            //myDouble2 = Math.Round(myDouble2, 3);
            //Console.WriteLine($"myDouble2: {myDouble2}");

            //Console.WriteLine(myBool.ToString() + myChar + myDouble);

            //myInt += 1;

            //Console.WriteLine(myInt);


            //Console.WriteLine(Mood.Bye);
            //Console.WriteLine((int)Mood.Bye);
            //Console.WriteLine(Mood.Bye.ToString());
            //Console.WriteLine("Hello World!");
            //int myInt = 0;
            //Console.WriteLine($"Check this out {(Mood)myInt}");
            //var moodAsStr = "chambo";
            //var mooo = Enum.Parse(typeof(Mood), moodAsStr, true);
            //Console.WriteLine("This is moooo " + mooo);
            //int num = 5;
            //Console.WriteLine(num);
            //num = 6;
            //Console.WriteLine(num);
            //Console.Write("Please enter your name: ");
            //var name = Console.ReadLine();
            //Console.WriteLine(name);
        }

    }
}
