import * as React from "react";

import { cn } from "@/lib/utils";

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-xl border bg-card text-card-foreground shadow",
      className
    )}
    {...props}
  />
));
Card.displayName = "Card";

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
));
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("font-semibold leading-none tracking-tight", className)}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
));
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
));
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
));
CardFooter.displayName = "CardFooter";

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
};

/* 

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

const courses = [
  {
    id: 1,
    title: "React for Beginners",
    description: "Learn React from scratch with hands-on projects.",
    image: "/react-course.jpg",
    tags: ["React", "Beginner"],
    price: "Free",
  },
  {
    id: 2,
    title: "Next.js Mastery",
    description: "Master Next.js with advanced concepts and features.",
    image: "/nextjs-course.jpg",
    tags: ["Next.js", "Intermediate"],
    price: "$49",
  },
  {
    id: 3,
    title: "JavaScript Essentials",
    description: "A deep dive into JavaScript ES6+ features.",
    image: "/js-course.jpg",
    tags: ["JavaScript", "Advanced"],
    price: "$39",
  },
];

export default function CourseList() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
      {courses.map((course) => (
        <Card
          key={course.id}
          className="hover:scale-[1.02] transition-transform"
        >
          <Image
            src={course.image}
            alt={course.title}
            width={400}
            height={250}
            className="w-full h-48 object-cover rounded-t-lg"
          />
          <CardContent className="p-4">
            <h2 className="text-lg font-semibold">{course.title}</h2>
            <p className="text-gray-600 text-sm mt-2">{course.description}</p>
            <div className="flex gap-2 mt-3">
              {course.tags.map((tag) => (
                <Badge key={tag}>{tag}</Badge>
              ))}
            </div>
            <p className="text-blue-600 font-bold mt-4">{course.price}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

*/
