'use client'
import { useRouter } from 'next/router';

export default function BlogPost() {
  const router = useRouter();
  const { slug } = router.query; // Access the value of the "slug" parameter

  // Render the page with the dynamic parameter
  return <h1>Blog Post: {slug}</h1>;
}
