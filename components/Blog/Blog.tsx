// pages/index.tsx
import { NextPage } from "next";
import BlogCard from "@components/Blog/BlogCard";
import Slider from "./Slider";
import "./Blog.scss";
interface Props {}

const Home: NextPage<Props> = () => {
  const data = [
    {
      src: "https://images.pexels.com/photos/1774929/pexels-photo-1774929.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Reducing Carbon Footprint",
      description: "Discover effective strategies to reduce your carbon footprint and contribute to a sustainable future.",
    },
    {
      src: "https://images.pexels.com/photos/236060/pexels-photo-236060.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Green Energy Solutions",
      description: "Explore renewable energy sources and sustainable technologies for a cleaner and greener world.",
    },
    {
      src: "https://images.pexels.com/photos/421999/pexels-photo-421999.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Eco-Friendly Lifestyle",
      description: "Embrace an eco-friendly lifestyle with tips on sustainable living and conscious consumer choices.",
    },
    {
      src: "https://images.pexels.com/photos/7656336/pexels-photo-7656336.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Protecting Biodiversity",
      description: "Learn about the importance of biodiversity conservation and ways to protect our ecosystems.",
    },
    {
      src: "https://images.pexels.com/photos/209224/pexels-photo-209224.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Circular Economy Principles",
      description: "Explore the concept of a circular economy and how it promotes sustainable resource management.",
    },
    {
      src: "https://images.pexels.com/photos/5710151/pexels-photo-5710151.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Sustainable Fashion Choices",
      description: "Discover ethical and sustainable fashion options that minimize environmental impact and support fair trade practices.",
    },
    {
      src: "https://images.pexels.com/photos/4397919/pexels-photo-4397919.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Food Waste Reduction",
      description: "Learn how to combat food waste through mindful consumption, proper storage, and creative meal planning.",
    },
    {
      src: "https://images.pexels.com/photos/974400/pexels-photo-974400.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Urban Gardening",
      description: "Explore the benefits of urban gardening and how it contributes to sustainable food production in cities.",
    },
  ];
  
  
  return (
    <div className="blog-container">
      <Slider />
      <div className="blog-wrapper">
        {data.map((item, index) => (
          <BlogCard
            key={index}
            src={item.src}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
