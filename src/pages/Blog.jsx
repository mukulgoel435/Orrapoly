import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'; 
import NavbarWithSidebar from '../components/NavbarWithSidebar';
import PageBanner from '../components/PageBanner';
import Footer from '../components/Footer';
import SingleBlog from '../components/SingleBlog'; 
import { useNavigate } from 'react-router-dom'; 

const BlogContainer = styled.div`
  min-height: 100vh;
  background-color: #f3ede3;
  color: #1f1f1f;
  font-family: 'Poppins', sans-serif;
  overflow-x: hidden;
`;

const BlogContent = styled.div`
  max-width: 1100px;
  margin: 4rem auto;
  padding: 0 2rem;
`;

const Heading = styled.h2`
  font-size: 2.8rem;
  font-weight: bold;
  margin-bottom: 2rem;
  color: #1f1f1f;
`;

const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
`;

const BlogCard = styled.div`
  background-color: #fff;
  border-radius: 16px;
  box-shadow: 0 8px 18px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  transition: transform 0.3s ease;
  &:hover {
    transform: translateY(-6px);
  }
`;

const BlogImage = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
`;

const BlogDetails = styled.div`
  padding: 1.2rem;
`;

const BlogTitle = styled.h3`
  font-size: 1.4rem;
  margin-bottom: 0.8rem;
  color: #1f1f1f;
`;

const BlogSnippet = styled.p`
  font-size: 1rem;
  color: #444;
`;
const ViewAllButton = styled(Link)`
  display: inline-block;
  background-color: #1f1f1f;
  color: #fff;
  font-size: 1rem;
  font-weight: 600;
  padding: 0.5rem 0.8rem;
  border: none;
  border-radius: 8px;
  text-decoration: none;
  transition: background-color 0.3s ease, transform 0.2s ease;
  margin-top: 3rem;
  text-align: center;

  &:hover {
    background-color: #3c3c3c;
    transform: translateY(-2px);
  }
`;


const Blog = () => {
  const navigate = useNavigate(); 
  const blogPosts = [
    {
        id: 1,
        title: 'How Polyester Threads Are Made',
        snippet: 'Explore the journey of polyester threads from raw materials to the final product, highlighting the intricate manufacturing processes involved.',
        image: 'https://images.unsplash.com/photo-1542044801-30d3e45ae49a?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },          
    {
      id: 2,
      title: 'Top 5 Uses of High-Tensile Threads',
      snippet: 'Discover the diverse applications of high-tensile polyester threads in various industries, emphasizing their strength and durability.',
      image: 'https://images.unsplash.com/photo-1656180001180-1f05aedd4cdc?q=80&w=2964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 3,
      title: 'Why Color Fastness Matters in Threads',
      snippet: 'Understand the importance of color fastness in threads and how it affects the longevity and appearance of textile products.',
      image: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 4,
      title: 'The Environmental Impact of Polyester Threads',
      snippet: 'An in-depth look at the environmental considerations of polyester thread production and sustainable alternatives.',
      image: 'https://images.unsplash.com/photo-1695235963109-ce1b6c8a1fb0?q=80&w=2946&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 5,
      title: 'Innovations in Polyester Thread Manufacturing',
      snippet: 'Explore the latest technological advancements in the production of polyester threads, enhancing quality and efficiency.',
      image: 'https://plus.unsplash.com/premium_photo-1682148926558-1193cab1b79b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 6,
      title: 'Polyester Threads in the Fashion Industry',
      snippet: 'Examine the role of polyester threads in modern fashion, from fast fashion to high-end designs.',
      image: 'https://images.unsplash.com/photo-1708234114248-ca1ec82405d2?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 7,
      title: 'Comparing Polyester and Cotton Threads',
      snippet: 'A comprehensive comparison between polyester and cotton threads, highlighting their respective advantages and uses.',
      image: 'https://plus.unsplash.com/premium_photo-1675799768485-51ed7ec2646f?q=80&w=2718&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 8,
      title: 'The Science Behind Thread Strength',
      snippet: 'Delve into the scientific principles that determine the strength of threads, focusing on polyester materials.',
      image: 'https://plus.unsplash.com/premium_photo-1670518644993-bc82e37bc0bc?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 9,
      title: 'Polyester Threads in Home Textiles',
      snippet: 'Explore how polyester threads are utilized in home textiles, offering durability and aesthetic appeal.',
      image: 'https://images.unsplash.com/photo-1661069387934-ecd66304ef85?q=80&w=3129&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 10,
      title: 'Understanding Thread Denier and Tex',
      snippet: 'Learn about the measurements of thread thickness and how they apply to polyester threads.',
      image: 'https://plus.unsplash.com/premium_photo-1723795284989-1eff7a3695a9?q=80&w=3204&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 11,
      title: 'The Role of Polyester Threads in Upholstery',
      snippet: 'Discover how polyester threads contribute to the strength and longevity of upholstered furniture.',
      image: 'https://images.unsplash.com/photo-1673168869511-44e08135adda?q=80&w=3024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 12,
      title: 'Advancements in Dyeing Polyester Threads',
      snippet: 'An overview of modern dyeing techniques that enhance the color vibrancy and fastness of polyester threads.',
      image: 'https://images.unsplash.com/photo-1506034844286-f98ed954e516?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 13,
      title: 'Polyester Threads in Automotive Textiles',
      snippet: 'Examine the application of polyester threads in automotive interiors, focusing on performance and safety.',
      image: 'https://images.unsplash.com/photo-1581116536851-df07c37c3021?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 14,
      title: 'The Lifecycle of Polyester Threads',
      snippet: 'Trace the lifecycle of polyester threads from production to end-of-life, including recycling processes.',
      image: 'https://images.unsplash.com/photo-1634689740880-e035aeb04a4d?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 15,
      title: 'Challenges in Recycling Polyester Threads',
      snippet: 'Discuss the difficulties associated with recycling polyester threads and potential solutions.',
      image: 'https://images.unsplash.com/photo-1664786496877-7bf1fc75c85e?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 16,
      title: 'Polyester Threads in Outdoor Gear',
      snippet: 'Explore how polyester threads are essential in the manufacturing of durable outdoor equipment.',
      image: 'https://images.unsplash.com/photo-1485809052957-5113b0ff51af?q=80&w=3135&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 17,
      title: 'The Economics of Polyester Thread Production',
      snippet: 'Analyze the economic factors influencing the production and pricing of polyester threads.',
      image: 'https://plus.unsplash.com/premium_photo-1672660509735-ac9377e2d0b6?q=80&w=3115&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 18,
      title: 'Safety Standards for Polyester Threads',
      snippet: 'Review the safety standards and certifications applicable to polyester threads in various industries.',
      image: 'https://plus.unsplash.com/premium_photo-1677529102407-0d075eb2cbb9?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    }
];  

  const handleBlogClick = (postId) => {
    navigate(`/single-blog/${postId}`); // Navigate to SingleBlog page with the postId
  };

  return (
    <>
      <NavbarWithSidebar />
      <PageBanner headingText="Our Blog" />
      <BlogContainer>
        <BlogContent>
          <Heading>Latest Articles</Heading>
          <BlogGrid>
            {blogPosts.map((post) => (
              <BlogCard key={post.id} onClick={() => handleBlogClick(post.id)}>
                <BlogImage src={post.image} alt={post.title} />
                <BlogDetails>
                  <BlogTitle>{post.title}</BlogTitle>
                  <BlogSnippet>{post.snippet}</BlogSnippet>
                  <ViewAllButton to={`/single-blog/${post.id}`}>
                     View All
                  </ViewAllButton>

                </BlogDetails>
              </BlogCard>
            ))}
          </BlogGrid>
          
        </BlogContent>
      </BlogContainer>
      <Footer />
    </>
  );
};

export default Blog;
