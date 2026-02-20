import axios from 'axios';

// Blogs: CRM se fetch (radical-crm DB). Forms: Next.js API (radicalDb).
const getWebsiteBase = () => (typeof window !== 'undefined' ? '' : process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000');
const getCrmApiUrl = () => process.env.NEXT_PUBLIC_CRM_API_URL || 'https://backend-radical.onrender.com';

// Create axios instance with default configuration
const apiClient = axios.create({
  baseURL: getCrmApiUrl(),
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add request interceptor to handle authentication
apiClient.interceptors.request.use(
  (config) => {
    // Add auth token if available
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('token') || sessionStorage.getItem('token');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add response interceptor for error handling
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('API Error:', error.response?.data || error.message);
    return Promise.reject(error);
  }
);

export interface Blog {
  id: string;
  title: string;
  excerpt: string;
  content?: string;
  author: string;
  category: string;
  status: string;
  date: string;
  views?: number;
  likes?: number;
  featuredImage?: string;
  slug: string;
  metaTitle?: string;
  metaDescription?: string;
  metaKeywords?: string;
}

export interface NeetUpdate {
  id: string;
  title: string;
  description: string;
  date: string;
  category: string;
  important: boolean;
  course?: string;
  year?: number;
  month?: string;
  state?: string;
  imageUrl?: string;
  link?: string;
  status: string;
  createdAt?: string;
  updatedAt?: string;
}

export async function getBlogs(): Promise<Blog[]> {
  try {
    const response = await apiClient.get('/api/blogs', {
      params: { _t: Date.now() },
      headers: { 
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Pragma': 'no-cache' 
      }
    });
    return Array.isArray(response.data) ? response.data : [];
  } catch (error) {
    console.error('Error fetching blogs:', error);
    return [];
  }
}

export async function getBlogBySlug(slug: string): Promise<Blog | null> {
  try {
    const response = await apiClient.get(`/api/blogs/slug/${encodeURIComponent(slug)}`, {
      params: { _t: Date.now() },
      headers: { 
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Pragma': 'no-cache' 
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching blog by slug:', error);
    return null;
  }
}

// NEET Updates API functions
export async function getNeetUpdates(): Promise<NeetUpdate[]> {
  try {
    const response = await apiClient.get('/api/neet-updates', {
      params: { _t: Date.now() },
      headers: { 
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Pragma': 'no-cache' 
      }
    });
    
    console.log('NEET updates API response:', response.data);
    return response.data.data || [];
  } catch (error) {
    console.error('Error fetching NEET updates:', error);
    
    // Return mock data only in development
    if (process.env.NODE_ENV === 'development') {
      console.log('Returning mock data for development');
      return [
        {
          id: "1",
          title: "NEET 2025 Registration Open",
          description: "Online registration for NEET 2025 has started. Last date to apply is March 15, 2025.",
          date: "2025-02-10",
          category: "Registration",
          important: true,
          course: "MBBS",
          year: 2025,
          status: "active"
        },
        {
          id: "2",
          title: "Exam Date Announced",
          description: "NEET 2025 will be conducted on May 4, 2025. Admit cards will be available from April 20.",
          date: "2025-02-08",
          category: "Exam",
          important: true,
          course: "MBBS",
          year: 2025,
          status: "active"
        }
      ];
    }
    
    throw error;
  }
}

export async function getNeetUpdateById(id: string): Promise<NeetUpdate | null> {
  try {
    const response = await apiClient.get(`/api/neet-updates/${id}`);
    return response.data.data || null;
  } catch (error) {
    console.error('Error fetching NEET update by ID:', error);
    return null;
  }
}
