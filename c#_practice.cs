/*  NOTE -- coderunner apparently cannot parse C# code within Classes / Namespaces, so this file
    should only be used for testing very basic C# code with the assumption that the code being written would
    NORMALLY be contained within a class/namespace. */

/*  NOTE 2 -- auto completion + format is NOT available in this file or any other C# files that
    are not contained within .NET project directories */


static void Main()
{
    byte number = 5;
    Console.WriteLine("Hello World!");
    Console.WriteLine(number);
}

Main()