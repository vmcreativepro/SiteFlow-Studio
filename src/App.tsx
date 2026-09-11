import React, { useState, useEffect, useRef } from 'react';
import { 
  Plus, Settings, Monitor, Smartphone, Tablet, Layout, Palette, 
  Eye, Download, Layers, ChevronRight, Trash2, Code, Home, Search, 
  Globe, Clock, ArrowLeft, Loader2, AlertCircle, MousePointer2,
  ChevronDown, MoreHorizontal, Check, Copy, HardDrive,
  Briefcase, Users, CreditCard, Package, Shield, Mail, UserPlus,
  ExternalLink, DollarSign, Receipt, Grid, Box, Maximize, AlignCenter,
  Image as ImageIcon, MousePointer, Activity,
  Files, Database, Image, BoxSelect, Sparkles, PlusCircle, FilePlus,
  Zap, ShieldCheck, HelpCircle, CloudDownload, Wand2, Link, Sparkle, 
  FolderPlus, Video, Youtube, Play, List, TextCursorInput, CheckSquare,
  Search as SearchIcon, MapPin, Facebook, Twitter, Square, Box as BoxIcon,
  Columns, Columns2, Quote, FileText, Camera, Radio, MoreVertical, Share2,
  ChevronUp, AlignLeft, Type as HeadingIcon, Text as TextLines, 
  MousePointerClick, PlayCircle, Info, Coffee, Type, 
  AlignCenter as AlignCenterIcon, AlignRight, AlignJustify,
  Minimize2, Maximize2, Move, Target, EyeOff, Scissors, Droplet, ArrowUp, X,
  Bold, Italic, Underline as UnderlineIcon, Strikethrough, Circle, CircleDashed,
  FileSearch, CornerUpLeft, ArrowDown, Copy as CopyIcon, RotateCcw, RotateCw,
  SlidersHorizontal, CheckCircle2, Folder, FolderOpen, Lock, ShoppingBag, User, FileCode, Edit3, GripVertical,
  PanelLeftClose, PanelLeftOpen, PanelRightClose, PanelRightOpen, ChevronLeft
} from 'lucide-react';

/**
 * SITEFLOW STUDIO - PRODUCTION MASTER (v27.0)
 * -----------------------------------------
 * UI: Full Element Library Restored
 * UI: Global Swatches Palette Manager in Backgrounds Inspector
 * Theme: Strictly Squared (0px Radius)
 * Aesthetic: Monochromatic Studio (#2b2b2b, #454545, #f4f4f4)
 */

const API_URL = 'http://localhost:5000/api';

// --- PAGE & FOLDER TYPES & CONSTANTS ---
export interface PageItem {
  id: string;
  name: string;
  slug: string;
  category: 'pages' | 'cms' | 'utility' | 'templates' | 'ecommerce' | 'user';
  folderId?: string | null;
  isHome?: boolean;
  isDraft?: boolean;
  seoTitle?: string;
  seoDescription?: string;
  password?: string;
  sections: any[];
}

export interface PageFolder {
  id: string;
  name: string;
  category: 'pages' | 'cms' | 'utility' | 'templates' | 'ecommerce' | 'user';
}

export const generatePageSections = (preset: string, pageTitle: string) => {
  const ts = Date.now();
  
  const navbarNode = {
    id: 'navbar',
    instanceId: ts + 1,
    name: 'Navbar',
    isContainer: true,
    styles: { backgroundColor: '#111111', padding: '16px 32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
    children: [
      { id: 'heading', instanceId: ts + 2, name: 'Brand Logo', styles: { color: '#ffffff', fontSize: '18px', fontWeight: 'bold' }, content: { text: 'SITEFLOW' } },
      { id: 'text', instanceId: ts + 3, name: 'Nav Links', styles: { color: '#aaaaaa', fontSize: '13px' }, content: { text: 'Home  ·  About  ·  Services  ·  Contact' } }
    ]
  };

  const footerNode = {
    id: 'footer',
    instanceId: ts + 90,
    name: 'Footer',
    isContainer: true,
    styles: { backgroundColor: '#0d0d0d', padding: '32px 32px', color: '#888888', fontSize: '12px', borderTop: '1px solid #222222', marginTop: 'auto' },
    children: [
      { id: 'text', instanceId: ts + 91, name: 'Copyright', styles: { color: '#666666', textAlign: 'center' }, content: { text: `© 2026 ${pageTitle} — Created in Siteflow Studio.` } }
    ]
  };

  if (preset === 'landing') {
    return [
      navbarNode,
      {
        id: 'hero',
        instanceId: ts + 10,
        name: 'Hero Banner',
        isContainer: true,
        styles: { backgroundColor: '#18181b', padding: '80px 32px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' },
        children: [
          { id: 'heading', instanceId: ts + 11, name: 'Main Heading', styles: { color: '#ffffff', fontSize: '42px', fontWeight: '800', maxWidth: '700px' }, content: { text: `Welcome to ${pageTitle}` } },
          { id: 'paragraph', instanceId: ts + 12, name: 'Subtext', styles: { color: '#a1a1aa', fontSize: '16px', maxWidth: '540px' }, content: { text: 'Build high-converting responsive websites with pixel-perfect design accuracy.' } },
          { id: 'button', instanceId: ts + 13, name: 'Primary CTA', styles: { backgroundColor: '#4f46e5', color: '#ffffff', padding: '12px 28px', border: 'none', fontWeight: '600', cursor: 'pointer', marginTop: '12px' }, content: { text: 'Get Started Now' } }
        ]
      },
      {
        id: 'features',
        instanceId: ts + 20,
        name: 'Features Section',
        isContainer: true,
        styles: { backgroundColor: '#27272a', padding: '64px 32px', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' },
        children: [
          { id: 'card', instanceId: ts + 21, name: 'Feature 1', isContainer: true, styles: { backgroundColor: '#18181b', padding: '24px', border: '1px solid #3f3f46' }, children: [{ id: 'heading', instanceId: ts + 22, name: 'Title', styles: { color: '#fff', fontSize: '18px', fontWeight: 'bold' }, content: { text: 'Visual Layout Canvas' } }] },
          { id: 'card', instanceId: ts + 23, name: 'Feature 2', isContainer: true, styles: { backgroundColor: '#18181b', padding: '24px', border: '1px solid #3f3f46' }, children: [{ id: 'heading', instanceId: ts + 24, name: 'Title', styles: { color: '#fff', fontSize: '18px', fontWeight: 'bold' }, content: { text: 'Global Swatches' } }] },
          { id: 'card', instanceId: ts + 25, name: 'Feature 3', isContainer: true, styles: { backgroundColor: '#18181b', padding: '24px', border: '1px solid #3f3f46' }, children: [{ id: 'heading', instanceId: ts + 26, name: 'Title', styles: { color: '#fff', fontSize: '18px', fontWeight: 'bold' }, content: { text: 'Full Page Architecture' } }] }
        ]
      },
      footerNode
    ];
  } else if (preset === 'about') {
    return [
      navbarNode,
      {
        id: 'hero',
        instanceId: ts + 10,
        name: 'About Hero',
        isContainer: true,
        styles: { backgroundColor: '#1a1a1a', padding: '64px 32px', textAlign: 'center' },
        children: [
          { id: 'heading', instanceId: ts + 11, name: 'Heading', styles: { color: '#ffffff', fontSize: '36px', fontWeight: 'bold' }, content: { text: 'Our Mission & Story' } },
          { id: 'paragraph', instanceId: ts + 12, name: 'Paragraph', styles: { color: '#888888', fontSize: '15px', maxWidth: '600px', margin: '16px auto 0' }, content: { text: 'We build digital products empowering creators to express ideas seamlessly.' } }
        ]
      },
      footerNode
    ];
  } else if (preset === 'contact') {
    return [
      navbarNode,
      {
        id: 'contact-section',
        instanceId: ts + 10,
        name: 'Contact Header',
        isContainer: true,
        styles: { backgroundColor: '#18181b', padding: '64px 32px' },
        children: [
          { id: 'heading', instanceId: ts + 11, name: 'Heading', styles: { color: '#ffffff', fontSize: '32px', fontWeight: 'bold', textAlign: 'center' }, content: { text: 'Get in Touch' } },
          { id: 'paragraph', instanceId: ts + 12, name: 'Subtext', styles: { color: '#a1a1aa', fontSize: '14px', textAlign: 'center', marginTop: '8px' }, content: { text: 'Send us a message and our team will get back to you.' } }
        ]
      },
      footerNode
    ];
  } else if (preset === '404') {
    return [
      navbarNode,
      {
        id: 'error-hero',
        instanceId: ts + 10,
        name: '404 Error Section',
        isContainer: true,
        styles: { backgroundColor: '#111111', padding: '100px 32px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' },
        children: [
          { id: 'heading', instanceId: ts + 11, name: 'Big 404', styles: { color: '#6366f1', fontSize: '72px', fontWeight: '900' }, content: { text: '404' } },
          { id: 'heading', instanceId: ts + 12, name: 'Subhead', styles: { color: '#ffffff', fontSize: '24px', fontWeight: 'bold', marginTop: '8px' }, content: { text: 'Page Not Found' } },
          { id: 'paragraph', instanceId: ts + 13, name: 'Text', styles: { color: '#71717a', fontSize: '14px', marginTop: '8px' }, content: { text: 'The requested URL path does not exist on this server.' } }
        ]
      },
      footerNode
    ];
  } else if (preset === 'login') {
    return [
      navbarNode,
      {
        id: 'login-hero',
        instanceId: ts + 10,
        name: 'Login Container',
        isContainer: true,
        styles: { backgroundColor: '#18181b', padding: '80px 32px', display: 'flex', justifyContent: 'center' },
        children: [
          {
            id: 'card',
            instanceId: ts + 11,
            name: 'Auth Card',
            isContainer: true,
            styles: { backgroundColor: '#27272a', padding: '32px', border: '1px solid #3f3f46', width: '360px', display: 'flex', flexDirection: 'column', gap: '16px' },
            children: [
              { id: 'heading', instanceId: ts + 12, name: 'Title', styles: { color: '#ffffff', fontSize: '20px', fontWeight: 'bold' }, content: { text: 'Member Access' } },
              { id: 'input', instanceId: ts + 13, name: 'Email Input', styles: { padding: '10px', backgroundColor: '#18181b', border: '1px solid #3f3f46', color: '#fff' }, content: { placeholder: 'Enter email address' } },
              { id: 'input', instanceId: ts + 14, name: 'Password Input', styles: { padding: '10px', backgroundColor: '#18181b', border: '1px solid #3f3f46', color: '#fff' }, content: { placeholder: 'Enter password' } },
              { id: 'button', instanceId: ts + 15, name: 'Submit Button', styles: { backgroundColor: '#4f46e5', color: '#ffffff', padding: '10px', textAlign: 'center', fontWeight: 'bold', cursor: 'pointer' }, content: { text: 'Sign In' } }
            ]
          }
        ]
      },
      footerNode
    ];
  } else if (preset === 'lead') {
    return [
      navbarNode,
      {
        id: 'lead-hero',
        instanceId: ts + 10,
        name: 'Lead Capture Hero',
        isContainer: true,
        styles: { backgroundColor: '#18181b', padding: '80px 32px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' },
        children: [
          { id: 'heading', instanceId: ts + 11, name: 'Lead Headline', styles: { color: '#ffffff', fontSize: '38px', fontWeight: '800', maxWidth: '650px' }, content: { text: 'Get Your Free Growth Playbook' } },
          { id: 'paragraph', instanceId: ts + 12, name: 'Lead Subtext', styles: { color: '#a1a1aa', fontSize: '15px', maxWidth: '520px' }, content: { text: 'Enter your email below to receive instant access to our exclusive strategy guide.' } },
          {
            id: 'form-block',
            instanceId: ts + 13,
            name: 'Lead Form',
            isContainer: true,
            styles: { display: 'flex', gap: '8px', marginTop: '16px', maxWidth: '440px', width: '100%' },
            children: [
              { id: 'input', instanceId: ts + 14, name: 'Email Input', styles: { padding: '12px 16px', backgroundColor: '#111', border: '1px solid #3f3f46', color: '#fff', width: '100%' }, content: { placeholder: 'work@company.com' } },
              { id: 'button', instanceId: ts + 15, name: 'Lead CTA Button', styles: { backgroundColor: '#4f46e5', color: '#ffffff', padding: '12px 24px', border: 'none', fontWeight: 'bold', cursor: 'pointer', whiteSpace: 'nowrap' }, content: { text: 'Claim Free Guide' } }
            ]
          }
        ]
      },
      footerNode
    ];
  } else if (preset === 'blog-template') {
    return [
      navbarNode,
      {
        id: 'article-hero',
        instanceId: ts + 10,
        name: 'Article Banner',
        isContainer: true,
        styles: { backgroundColor: '#18181b', padding: '64px 32px' },
        children: [
          { id: 'heading', instanceId: ts + 11, name: 'Article Title', styles: { color: '#ffffff', fontSize: '36px', fontWeight: 'bold' }, content: { text: 'CMS Article Template' } },
          { id: 'text', instanceId: ts + 12, name: 'Meta Info', styles: { color: '#888888', fontSize: '12px', marginTop: '8px' }, content: { text: 'Published August 2026  ·  Category: Architecture' } }
        ]
      },
      footerNode
    ];
  } else if (preset === 'product-template') {
    return [
      navbarNode,
      {
        id: 'product-section',
        instanceId: ts + 10,
        name: 'Product Details Section',
        isContainer: true,
        styles: { backgroundColor: '#18181b', padding: '64px 32px', display: 'flex', gap: '32px' },
        children: [
          { id: 'card', instanceId: ts + 11, name: 'Product Image Box', isContainer: true, styles: { backgroundColor: '#27272a', padding: '40px', width: '50%', textAlign: 'center' }, children: [{ id: 'heading', instanceId: ts + 12, name: 'Placeholder', styles: { color: '#666', fontSize: '14px' }, content: { text: '[ Product Image ]' } }] },
          { id: 'card', instanceId: ts + 13, name: 'Product Info Box', isContainer: true, styles: { width: '50%', display: 'flex', flexDirection: 'column', gap: '16px' }, children: [
            { id: 'heading', instanceId: ts + 14, name: 'Product Title', styles: { color: '#fff', fontSize: '28px', fontWeight: 'bold' }, content: { text: 'Sample Product Item' } },
            { id: 'text', instanceId: ts + 15, name: 'Price Tag', styles: { color: '#818cf8', fontSize: '22px', fontWeight: 'bold' }, content: { text: '$149.00 USD' } },
            { id: 'button', instanceId: ts + 16, name: 'Add to Cart', styles: { backgroundColor: '#4f46e5', color: '#fff', padding: '12px 24px', cursor: 'pointer' }, content: { text: 'Add to Cart' } }
          ] }
        ]
      },
      footerNode
    ];
  }

  return [navbarNode, footerNode];
};

export const INITIAL_FOLDERS: PageFolder[] = [
  { id: 'folder-company', name: 'Company', category: 'pages' },
  { id: 'folder-legal', name: 'Legal', category: 'pages' }
];

export const INITIAL_PAGES: PageItem[] = [
  {
    id: 'home',
    name: 'Home',
    slug: '/',
    category: 'pages',
    isHome: true,
    isDraft: false,
    seoTitle: 'Home | Siteflow Studio Web Architecture',
    seoDescription: 'High performance web experience created with Siteflow Studio.',
    sections: generatePageSections('landing', 'Home')
  },
  {
    id: 'about',
    name: 'About Us',
    slug: '/about',
    category: 'pages',
    isDraft: false,
    seoTitle: 'About Us - Our Mission & Team',
    seoDescription: 'Learn about our company values and team.',
    sections: generatePageSections('about', 'About Us')
  },
  {
    id: 'contact',
    name: 'Contact',
    slug: '/contact',
    category: 'pages',
    isDraft: false,
    seoTitle: 'Contact Us | Get in Touch',
    seoDescription: 'Reach out to our support and sales team.',
    sections: generatePageSections('contact', 'Contact')
  },
  {
    id: 'team',
    name: 'Team',
    slug: '/company/team',
    folderId: 'folder-company',
    category: 'pages',
    isDraft: false,
    seoTitle: 'Our Team',
    sections: generatePageSections('about', 'Our Team')
  },
  {
    id: 'privacy',
    name: 'Privacy Policy',
    slug: '/legal/privacy',
    folderId: 'folder-legal',
    category: 'pages',
    isDraft: false,
    seoTitle: 'Privacy Policy',
    sections: generatePageSections('blank', 'Privacy Policy')
  },
  {
    id: 'cms-blog',
    name: 'Blog Posts Template',
    slug: '/blog/{slug}',
    category: 'cms',
    isDraft: false,
    seoTitle: 'Blog Post - Siteflow CMS',
    sections: generatePageSections('blog-template', 'Blog Posts Template')
  },
  {
    id: 'cms-authors',
    name: 'Authors Template',
    slug: '/authors/{slug}',
    category: 'cms',
    isDraft: false,
    seoTitle: 'Author Profile',
    sections: generatePageSections('about', 'Authors Template')
  },
  {
    id: 'util-404',
    name: '404 Not Found',
    slug: '/404',
    category: 'utility',
    isDraft: false,
    seoTitle: 'Page Not Found - 404',
    sections: generatePageSections('404', '404 Not Found')
  },
  {
    id: 'util-password',
    name: 'Password Protected',
    slug: '/password',
    category: 'utility',
    isDraft: false,
    password: 'studio-secret',
    seoTitle: 'Password Required',
    sections: generatePageSections('login', 'Password Protected')
  },
  {
    id: 'ecom-product',
    name: 'Products Template',
    slug: '/product/{slug}',
    category: 'ecommerce',
    isDraft: false,
    seoTitle: 'Product Details',
    sections: generatePageSections('product-template', 'Products Template')
  },
  {
    id: 'ecom-checkout',
    name: 'Checkout',
    slug: '/checkout',
    category: 'ecommerce',
    isDraft: false,
    seoTitle: 'Secure Checkout',
    sections: generatePageSections('contact', 'Checkout')
  },
  {
    id: 'user-login',
    name: 'Log In',
    slug: '/log-in',
    category: 'user',
    isDraft: false,
    seoTitle: 'Log In to Account',
    sections: generatePageSections('login', 'Log In')
  },
  {
    id: 'user-signup',
    name: 'Sign Up',
    slug: '/sign-up',
    category: 'user',
    isDraft: false,
    seoTitle: 'Create an Account',
    sections: generatePageSections('login', 'Sign Up')
  }
];

// --- GLOBAL SWATCH TYPES & CONSTANTS ---
export interface GlobalSwatch {
  id: string;
  name: string;
  color: string;
  category: 'Brand' | 'Neutral' | 'Accent' | 'Custom';
}

export const INITIAL_GLOBAL_SWATCHES: GlobalSwatch[] = [
  { id: 'swatch-1', name: 'Studio Dark', color: '#2b2b2b', category: 'Brand' },
  { id: 'swatch-2', name: 'Studio Accent', color: '#0055FF', category: 'Brand' },
  { id: 'swatch-3', name: 'Canvas Light', color: '#ffffff', category: 'Neutral' },
  { id: 'swatch-4', name: 'Muted Gray', color: '#f4f4f4', category: 'Neutral' },
  { id: 'swatch-5', name: 'Dark Surface', color: '#1e1e1e', category: 'Neutral' },
  { id: 'swatch-6', name: 'Charcoal', color: '#454545', category: 'Neutral' },
  { id: 'swatch-7', name: 'Emerald Green', color: '#10B981', category: 'Accent' },
  { id: 'swatch-8', name: 'Amber Glow', color: '#F59E0B', category: 'Accent' },
  { id: 'swatch-9', name: 'Coral Red', color: '#EF4444', category: 'Accent' },
  { id: 'swatch-10', name: 'Indigo Ink', color: '#6366F1', category: 'Brand' },
];

export const PALETTE_PRESETS = [
  {
    name: 'Monochrome Studio',
    description: 'Minimalist high-contrast grayscale studio palette',
    swatches: [
      { id: 'p1-1', name: 'Obsidian', color: '#111111', category: 'Brand' },
      { id: 'p1-2', name: 'Dark Slate', color: '#2b2b2b', category: 'Brand' },
      { id: 'p1-3', name: 'Mid Gray', color: '#666666', category: 'Neutral' },
      { id: 'p1-4', name: 'Light Slate', color: '#e5e5e5', category: 'Neutral' },
      { id: 'p1-5', name: 'Pure White', color: '#ffffff', category: 'Neutral' },
    ]
  },
  {
    name: 'Modern Webflow',
    description: 'Clean indigo and dark studio tones for web apps',
    swatches: [
      { id: 'p2-1', name: 'Webflow Blue', color: '#146EF5', category: 'Brand' },
      { id: 'p2-2', name: 'Dark Canvas', color: '#191919', category: 'Neutral' },
      { id: 'p2-3', name: 'Card Surface', color: '#262626', category: 'Neutral' },
      { id: 'p2-4', name: 'Border Tone', color: '#383838', category: 'Neutral' },
      { id: 'p2-5', name: 'Teal Pulse', color: '#00D2B8', category: 'Accent' },
    ]
  },
  {
    name: 'Warm Editorial',
    description: 'Rich organic warm tones for magazines and agencies',
    swatches: [
      { id: 'p3-1', name: 'Cream Base', color: '#FDFBF7', category: 'Neutral' },
      { id: 'p3-2', name: 'Deep Espresso', color: '#221F1D', category: 'Brand' },
      { id: 'p3-3', name: 'Terracotta', color: '#C86D51', category: 'Accent' },
      { id: 'p3-4', name: 'Warm Amber', color: '#E4A853', category: 'Accent' },
      { id: 'p3-5', name: 'Sage Green', color: '#8A9A86', category: 'Accent' },
    ]
  },
  {
    name: 'Vibrant Cyber',
    description: 'High-energy neon accents for SaaS landing pages',
    swatches: [
      { id: 'p4-1', name: 'Neon Purple', color: '#8B5CF6', category: 'Brand' },
      { id: 'p4-2', name: 'Electric Cyan', color: '#06B6D4', category: 'Accent' },
      { id: 'p4-3', name: 'Hot Pink', color: '#EC4899', category: 'Accent' },
      { id: 'p4-4', name: 'Midnight Space', color: '#0F172A', category: 'Neutral' },
      { id: 'p4-5', name: 'Lime Glow', color: '#84CC16', category: 'Accent' },
    ]
  }
];

const getContrastColor = (hex: string): 'white' | 'black' => {
  if (!hex || typeof hex !== 'string') return 'white';
  const cleanHex = hex.trim().replace('#', '');
  if (cleanHex.length !== 3 && cleanHex.length !== 6) return 'white';
  let r = 0, g = 0, b = 0;
  if (cleanHex.length === 6) {
    r = parseInt(cleanHex.substring(0, 2), 16);
    g = parseInt(cleanHex.substring(2, 4), 16);
    b = parseInt(cleanHex.substring(4, 6), 16);
  } else if (cleanHex.length === 3) {
    r = parseInt(cleanHex[0] + cleanHex[0], 16);
    g = parseInt(cleanHex[1] + cleanHex[1], 16);
    b = parseInt(cleanHex[2] + cleanHex[2], 16);
  }
  const yiq = (r * 299 + g * 587 + b * 114) / 1000;
  return yiq >= 128 ? 'black' : 'white';
};

// --- LAYOUT TEMPLATE LIBRARY ---
const LAYOUT_TEMPLATES: Record<string, Array<{ id: string; name: string; description?: string; sections: any[] }>> = {
  Navigation: [
    { 
      id: 'nav-center', 
      name: 'Navbar Logo Center', 
      description: 'Centered company logo with surrounding links and action CTA',
      sections: [{
        id: 'navbar', name: 'Navbar', isContainer: true,
        styles: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 32px', backgroundColor: '#18181b', borderBottom: '1px solid #27272a', width: '100%' },
        children: [
          { id: 'text-block', name: 'Left Link', styles: { fontSize: '14px', color: '#a1a1aa', fontWeight: '500' }, content: { text: 'Features' } },
          { id: 'text-block', name: 'Logo Brand', styles: { fontSize: '20px', fontWeight: '800', color: '#ffffff', letterSpacing: '0.05em' }, content: { text: 'STUDIO' } },
          { id: 'button', name: 'CTA Action', styles: { backgroundColor: '#4f46e5', color: '#ffffff', padding: '8px 16px', borderRadius: '6px', fontSize: '13px', fontWeight: '600' }, content: { text: 'Get Started' } }
        ]
      }]
    },
    { 
      id: 'nav-left', 
      name: 'Navbar Logo Left & Links', 
      description: 'Left-aligned brand logo with inline navigation links and dual action buttons',
      sections: [{
        id: 'navbar', name: 'Navbar Left', isContainer: true,
        styles: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 32px', backgroundColor: '#09090b', borderBottom: '1px solid #18181b', width: '100%' },
        children: [
          {
            id: 'brand-group', name: 'Brand Group', isContainer: true,
            styles: { display: 'flex', alignItems: 'center', gap: '32px' },
            children: [
              { id: 'text-block', name: 'Logo', styles: { fontSize: '18px', fontWeight: '800', color: '#6366f1' }, content: { text: 'SITEFLOW' } },
              { id: 'text-block', name: 'Link 1', styles: { fontSize: '14px', color: '#d4d4d8' }, content: { text: 'Product' } },
              { id: 'text-block', name: 'Link 2', styles: { fontSize: '14px', color: '#d4d4d8' }, content: { text: 'Solutions' } },
              { id: 'text-block', name: 'Link 3', styles: { fontSize: '14px', color: '#d4d4d8' }, content: { text: 'Pricing' } }
            ]
          },
          {
            id: 'actions-group', name: 'Actions Group', isContainer: true,
            styles: { display: 'flex', alignItems: 'center', gap: '12px' },
            children: [
              { id: 'button-ghost', name: 'Sign In', styles: { backgroundColor: 'transparent', color: '#e4e4e7', padding: '8px 14px', fontSize: '13px' }, content: { text: 'Sign In' } },
              { id: 'button-primary', name: 'Register', styles: { backgroundColor: '#4f46e5', color: '#ffffff', padding: '8px 16px', borderRadius: '6px', fontSize: '13px', fontWeight: '600' }, content: { text: 'Free Trial' } }
            ]
          }
        ]
      }]
    }
  ],
  Hero: [
    { 
      id: 'hero-center', 
      name: 'Hero Heading Centered', 
      description: 'Centered headline with kicker badge, paragraph, and dual call-to-action buttons',
      sections: [{
        id: 'section', name: 'Hero Centered', isContainer: true,
        styles: { display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '96px 24px', textAlign: 'center', width: '100%', backgroundColor: '#09090b' },
        children: [
          { id: 'kicker-badge', name: 'Kicker Badge', styles: { color: '#818cf8', backgroundColor: '#1e1b4b', border: '1px solid #3730a3', fontSize: '11px', fontWeight: '700', padding: '4px 12px', borderRadius: '20px', textTransform: 'uppercase', marginBottom: '20px' }, content: { text: '⚡ ANNOUNCING SITEFLOW V2.0' } },
          { id: 'heading', name: 'Main Display Title', styles: { fontSize: '52px', color: '#ffffff', fontWeight: '800', lineHeight: '1.1', maxWidth: '800px', marginBottom: '20px' }, content: { text: 'Engineered for Deterministic Web Architecture' } },
          { id: 'paragraph', name: 'Subtext Copy', styles: { fontSize: '18px', maxWidth: '640px', marginBottom: '36px', color: '#a1a1aa', lineHeight: '1.6' }, content: { text: 'Build pixel-perfect responsive web applications with precision layout controls, real-time code generation, and direct CSS variable design tokens.' } },
          { 
            id: 'btn-row', name: 'CTA Row', isContainer: true,
            styles: { display: 'flex', alignItems: 'center', gap: '16px' },
            children: [
              { id: 'button-p', name: 'Primary CTA', styles: { backgroundColor: '#4f46e5', color: '#ffffff', padding: '12px 28px', borderRadius: '8px', fontSize: '15px', fontWeight: '700' }, content: { text: 'Start Building Free' } },
              { id: 'button-s', name: 'Secondary CTA', styles: { backgroundColor: '#27272a', color: '#e4e4e7', border: '1px solid #3f3f46', padding: '12px 24px', borderRadius: '8px', fontSize: '15px', fontWeight: '600' }, content: { text: 'Explore Documentation' } }
            ]
          }
        ]
      }]
    },
    {
      id: 'hero-split',
      name: 'Hero 2-Column Split',
      description: 'Split layout with copy & email capture form on left, visual canvas card on right',
      sections: [{
        id: 'hero-split-sec', name: 'Hero Split Section', isContainer: true,
        styles: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', alignItems: 'center', padding: '80px 32px', backgroundColor: '#18181b', width: '100%' },
        children: [
          {
            id: 'hero-split-left', name: 'Left Copy Block', isContainer: true,
            styles: { display: 'flex', flexDirection: 'column', gap: '20px' },
            children: [
              { id: 'heading', name: 'Split Title', styles: { color: '#ffffff', fontSize: '44px', fontWeight: '800', lineHeight: '1.15' }, content: { text: 'Transform Design into Production Code' } },
              { id: 'paragraph', name: 'Split Body', styles: { color: '#a1a1aa', fontSize: '16px', lineHeight: '1.6' }, content: { text: 'Full control over layouts, breakpoints, and design tokens without writing boilerplate manually.' } },
              {
                id: 'email-form', name: 'Form Container', isContainer: true,
                styles: { display: 'flex', gap: '8px', maxWidth: '440px', width: '100%' },
                children: [
                  { id: 'input', name: 'Email Input', styles: { backgroundColor: '#09090b', border: '1px solid #3f3f46', color: '#ffffff', padding: '12px 16px', borderRadius: '6px', width: '100%' }, content: { placeholder: 'Enter work email address...' } },
                  { id: 'button', name: 'Submit Button', styles: { backgroundColor: '#4f46e5', color: '#ffffff', padding: '12px 20px', borderRadius: '6px', fontWeight: '700', whitespace: 'nowrap' }, content: { text: 'Join Waitlist' } }
                ]
              }
            ]
          },
          {
            id: 'hero-split-right', name: 'Right Preview Card', isContainer: true,
            styles: { backgroundColor: '#09090b', border: '1px solid #27272a', borderRadius: '12px', padding: '32px', minHeight: '320px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)' },
            children: [
              { id: 'image', name: 'Dashboard Mockup', styles: { width: '100%', borderRadius: '8px', display: 'block' }, content: { url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80' } }
            ]
          }
        ]
      }]
    }
  ],
  Features: [
    {
      id: 'feat-3col',
      name: 'Features 3-Column Cards',
      description: 'Three distinct feature cards highlighting core platform capabilities',
      sections: [{
        id: 'feat-sec-3col', name: 'Feature Section', isContainer: true,
        styles: { display: 'flex', flexDirection: 'column', gap: '48px', padding: '80px 32px', backgroundColor: '#09090b', width: '100%' },
        children: [
          {
            id: 'feat-head-grp', name: 'Header Group', isContainer: true,
            styles: { display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '12px' },
            children: [
              { id: 'kicker', name: 'Kicker Text', styles: { color: '#818cf8', fontSize: '12px', fontWeight: '800', letterSpacing: '0.1em', textTransform: 'uppercase' }, content: { text: 'ENGINEERED FOR SCALE' } },
              { id: 'heading', name: 'Section Title', styles: { color: '#ffffff', fontSize: '36px', fontWeight: '800' }, content: { text: 'Everything You Need to Build Fast' } },
              { id: 'sub', name: 'Section Subtext', styles: { color: '#a1a1aa', fontSize: '16px', maxWidth: '600px' }, content: { text: 'Modular tools designed for developers, designers, and visual studio builders.' } }
            ]
          },
          {
            id: 'feat-cards-grid', name: 'Cards Grid', isContainer: true,
            styles: { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' },
            children: [
              {
                id: 'card-1', name: 'Feature Card 1', isContainer: true,
                styles: { backgroundColor: '#18181b', border: '1px solid #27272a', borderRadius: '12px', padding: '28px', display: 'flex', flexDirection: 'column', gap: '12px' },
                children: [
                  { id: 'badge-1', name: 'Icon Badge', styles: { backgroundColor: '#1e1b4b', color: '#818cf8', fontSize: '11px', fontWeight: '700', padding: '4px 10px', borderRadius: '4px', alignSelf: 'flex-start' }, content: { text: '⚡ FAST' } },
                  { id: 'title-1', name: 'Card Title', styles: { color: '#ffffff', fontSize: '20px', fontWeight: '700' }, content: { text: 'Real-time CSS Token Engine' } },
                  { id: 'desc-1', name: 'Card Body', styles: { color: '#a1a1aa', fontSize: '14px', lineHeight: '1.6' }, content: { text: 'Manage global swatches, typography hierarchies, and layout rules synchronized directly with production stylesheets.' } }
                ]
              },
              {
                id: 'card-2', name: 'Feature Card 2', isContainer: true,
                styles: { backgroundColor: '#18181b', border: '1px solid #27272a', borderRadius: '12px', padding: '28px', display: 'flex', flexDirection: 'column', gap: '12px' },
                children: [
                  { id: 'badge-2', name: 'Icon Badge', styles: { backgroundColor: '#064e3b', color: '#34d399', fontSize: '11px', fontWeight: '700', padding: '4px 10px', borderRadius: '4px', alignSelf: 'flex-start' }, content: { text: '🎯 PRECISE' } },
                  { id: 'title-2', name: 'Card Title', styles: { color: '#ffffff', fontSize: '20px', fontWeight: '700' }, content: { text: 'Fixed Viewport Controls' } },
                  { id: 'desc-2', name: 'Card Body', styles: { color: '#a1a1aa', fontSize: '14px', lineHeight: '1.6' }, content: { text: 'Inspect components across exact 1200px desktop, tablet, and mobile breakpoints without browser stretching.' } }
                ]
              },
              {
                id: 'card-3', name: 'Feature Card 3', isContainer: true,
                styles: { backgroundColor: '#18181b', border: '1px solid #27272a', borderRadius: '12px', padding: '28px', display: 'flex', flexDirection: 'column', gap: '12px' },
                children: [
                  { id: 'badge-3', name: 'Icon Badge', styles: { backgroundColor: '#451a03', color: '#fb923c', fontSize: '11px', fontWeight: '700', padding: '4px 10px', borderRadius: '4px', alignSelf: 'flex-start' }, content: { text: '📦 EXPORT' } },
                  { id: 'title-3', name: 'Card Title', styles: { color: '#ffffff', fontSize: '20px', fontWeight: '700' }, content: { text: 'Clean Code Generation' } },
                  { id: 'desc-3', name: 'Card Body', styles: { color: '#a1a1aa', fontSize: '14px', lineHeight: '1.6' }, content: { text: 'Export production-ready HTML & CSS bundles instantly or sync with your existing repository setup.' } }
                ]
              }
            ]
          }
        ]
      }]
    }
  ],
  Pricing: [
    {
      id: 'pricing-table-3col',
      name: 'Pricing 3-Tier Grid',
      description: 'Side-by-side Creator, Pro (Featured), and Enterprise subscription plans',
      sections: [{
        id: 'pricing-grid-sec', name: 'Pricing Section', isContainer: true,
        styles: { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px', padding: '80px 32px', backgroundColor: '#09090b', width: '100%' },
        children: [
          {
            id: 'tier-starter', name: 'Starter Tier', isContainer: true,
            styles: { backgroundColor: '#18181b', border: '1px solid #27272a', borderRadius: '12px', padding: '32px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: '20px' },
            children: [
              {
                id: 'starter-head', name: 'Header', isContainer: true, styles: { display: 'flex', flexDirection: 'column', gap: '8px' },
                children: [
                  { id: 'sub', name: 'Plan Name', styles: { color: '#38bdf8', fontSize: '12px', fontWeight: '700', textTransform: 'uppercase' }, content: { text: 'Starter Free' } },
                  { id: 'price', name: 'Price Tag', styles: { color: '#ffffff', fontSize: '36px', fontWeight: '800' }, content: { text: '$0 / mo' } },
                  { id: 'desc', name: 'Desc', styles: { color: '#a1a1aa', fontSize: '13px' }, content: { text: 'Ideal for testing layout tools and personal sandbox builds.' } }
                ]
              },
              { id: 'btn', name: 'CTA', styles: { backgroundColor: '#27272a', color: '#ffffff', padding: '12px', borderRadius: '6px', fontWeight: '600', textAlign: 'center' }, content: { text: 'Start Free Sandbox' } }
            ]
          },
          {
            id: 'tier-pro', name: 'Pro Team Tier (Featured)', isContainer: true,
            styles: { backgroundColor: '#18181b', border: '2px solid #6366f1', borderRadius: '12px', padding: '32px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: '20px', boxShadow: '0 20px 25px -5px rgba(99, 102, 241, 0.2)' },
            children: [
              { id: 'badge', name: 'Popular Badge', styles: { backgroundColor: '#6366f1', color: '#ffffff', fontSize: '10px', fontWeight: '800', padding: '4px 10px', borderRadius: '20px', alignSelf: 'flex-start' }, content: { text: 'MOST POPULAR' } },
              {
                id: 'pro-head', name: 'Header', isContainer: true, styles: { display: 'flex', flexDirection: 'column', gap: '8px' },
                children: [
                  { id: 'sub', name: 'Plan Name', styles: { color: '#818cf8', fontSize: '12px', fontWeight: '700', textTransform: 'uppercase' }, content: { text: 'Pro Studio' } },
                  { id: 'price', name: 'Price Tag', styles: { color: '#ffffff', fontSize: '36px', fontWeight: '800' }, content: { text: '$49 / mo' } },
                  { id: 'desc', name: 'Desc', styles: { color: '#c7d2fe', fontSize: '13px' }, content: { text: 'Unlimited site builds, clean CSS exports, and full asset suite.' } }
                ]
              },
              { id: 'btn', name: 'CTA', styles: { backgroundColor: '#4f46e5', color: '#ffffff', padding: '12px', borderRadius: '6px', fontWeight: '700', textAlign: 'center' }, content: { text: 'Start 14-Day Free Trial' } }
            ]
          },
          {
            id: 'tier-enterprise', name: 'Enterprise Tier', isContainer: true,
            styles: { backgroundColor: '#18181b', border: '1px solid #27272a', borderRadius: '12px', padding: '32px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: '20px' },
            children: [
              {
                id: 'ent-head', name: 'Header', isContainer: true, styles: { display: 'flex', flexDirection: 'column', gap: '8px' },
                children: [
                  { id: 'sub', name: 'Plan Name', styles: { color: '#a1a1aa', fontSize: '12px', fontWeight: '700', textTransform: 'uppercase' }, content: { text: 'Enterprise' } },
                  { id: 'price', name: 'Price Tag', styles: { color: '#ffffff', fontSize: '36px', fontWeight: '800' }, content: { text: '$199 / mo' } },
                  { id: 'desc', name: 'Desc', styles: { color: '#a1a1aa', fontSize: '13px' }, content: { text: 'Dedicated cloud architecture, SLA uptime, and priority support.' } }
                ]
              },
              { id: 'btn', name: 'CTA', styles: { backgroundColor: '#27272a', color: '#ffffff', padding: '12px', borderRadius: '6px', fontWeight: '600', textAlign: 'center' }, content: { text: 'Contact Enterprise Sales' } }
            ]
          }
        ]
      }]
    }
  ],
  Footer: [
    {
      id: 'footer-mega',
      name: 'Footer 4-Column Mega',
      description: 'Comprehensive footer with brand bio, 3 navigation link columns, and copyright',
      sections: [{
        id: 'footer-sec', name: 'Footer Section', isContainer: true,
        styles: { backgroundColor: '#09090b', borderTop: '1px solid #18181b', padding: '64px 32px 32px 32px', width: '100%', display: 'flex', flexDirection: 'column', gap: '48px' },
        children: [
          {
            id: 'footer-top-grid', name: 'Columns Grid', isContainer: true,
            styles: { display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: '32px' },
            children: [
              {
                id: 'col-brand', name: 'Brand Bio Column', isContainer: true, styles: { display: 'flex', flexDirection: 'column', gap: '12px' },
                children: [
                  { id: 'logo', name: 'Brand Logo', styles: { color: '#ffffff', fontSize: '18px', fontWeight: '800' }, content: { text: 'SITEFLOW STUDIO' } },
                  { id: 'bio', name: 'Bio Subtext', styles: { color: '#71717a', fontSize: '13px', lineHeight: '1.6', maxWidth: '300px' }, content: { text: 'Empowering engineering teams with deterministic visual layout engines.' } }
                ]
              },
              {
                id: 'col-prod', name: 'Product Links', isContainer: true, styles: { display: 'flex', flexDirection: 'column', gap: '10px' },
                children: [
                  { id: 'h', name: 'Column Title', styles: { color: '#ffffff', fontSize: '12px', fontWeight: '700', textTransform: 'uppercase' }, content: { text: 'Product' } },
                  { id: 'l1', name: 'Link 1', styles: { color: '#a1a1aa', fontSize: '13px' }, content: { text: 'Visual Canvas' } },
                  { id: 'l2', name: 'Link 2', styles: { color: '#a1a1aa', fontSize: '13px' }, content: { text: 'Design Tokens' } },
                  { id: 'l3', name: 'Link 3', styles: { color: '#a1a1aa', fontSize: '13px' }, content: { text: 'HTML Exporter' } }
                ]
              },
              {
                id: 'col-comp', name: 'Company Links', isContainer: true, styles: { display: 'flex', flexDirection: 'column', gap: '10px' },
                children: [
                  { id: 'h', name: 'Column Title', styles: { color: '#ffffff', fontSize: '12px', fontWeight: '700', textTransform: 'uppercase' }, content: { text: 'Company' } },
                  { id: 'l1', name: 'Link 1', styles: { color: '#a1a1aa', fontSize: '13px' }, content: { text: 'About Us' } },
                  { id: 'l2', name: 'Link 2', styles: { color: '#a1a1aa', fontSize: '13px' }, content: { text: 'Careers' } },
                  { id: 'l3', name: 'Link 3', styles: { color: '#a1a1aa', fontSize: '13px' }, content: { text: 'Privacy Policy' } }
                ]
              },
              {
                id: 'col-res', name: 'Resources Links', isContainer: true, styles: { display: 'flex', flexDirection: 'column', gap: '10px' },
                children: [
                  { id: 'h', name: 'Column Title', styles: { color: '#ffffff', fontSize: '12px', fontWeight: '700', textTransform: 'uppercase' }, content: { text: 'Resources' } },
                  { id: 'l1', name: 'Link 1', styles: { color: '#a1a1aa', fontSize: '13px' }, content: { text: 'Documentation' } },
                  { id: 'l2', name: 'Link 2', styles: { color: '#a1a1aa', fontSize: '13px' }, content: { text: 'API Reference' } },
                  { id: 'l3', name: 'Link 3', styles: { color: '#a1a1aa', fontSize: '13px' }, content: { text: 'Community Forum' } }
                ]
              }
            ]
          },
          {
            id: 'footer-btm-row', name: 'Bottom Copyright Row', isContainer: true,
            styles: { borderTop: '1px solid #18181b', paddingTop: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
            children: [
              { id: 'copy', name: 'Copyright Notice', styles: { color: '#52525b', fontSize: '12px' }, content: { text: '© 2026 Siteflow Studio Inc. All rights reserved.' } },
              { id: 'tag', name: 'Tagline', styles: { color: '#52525b', fontSize: '12px' }, content: { text: 'Built with Precision' } }
            ]
          }
        ]
      }]
    }
  ],
  Team: [
    {
      id: 'team-grid-4col',
      name: 'Team 4-Column Profiles',
      description: 'Profile cards featuring photos, names, roles, and bio statements',
      sections: [{
        id: 'team-sec', name: 'Team Section', isContainer: true,
        styles: { display: 'flex', flexDirection: 'column', gap: '48px', padding: '80px 32px', backgroundColor: '#09090b', width: '100%' },
        children: [
          {
            id: 'team-header', name: 'Header', isContainer: true,
            styles: { textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '8px' },
            children: [
              { id: 'heading', name: 'Title', styles: { color: '#ffffff', fontSize: '32px', fontWeight: '800' }, content: { text: 'Meet the Builders' } },
              { id: 'paragraph', name: 'Subtitle', styles: { color: '#a1a1aa', fontSize: '15px' }, content: { text: 'The engineering and design mindsets shaping the future of web architecture.' } }
            ]
          },
          {
            id: 'team-grid', name: 'Team Grid', isContainer: true,
            styles: { display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px' },
            children: [
              { name: 'Alex Rivera', role: 'Founder & CEO', img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80' },
              { name: 'Elena Rostova', role: 'Head of Product', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80' },
              { name: 'Marcus Chen', role: 'Lead Architect', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80' },
              { name: 'Sarah Jenkins', role: 'Principal Designer', img: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80' }
            ].map((member, idx) => ({
              id: `member-${idx}`, name: member.name, isContainer: true,
              styles: { backgroundColor: '#18181b', border: '1px solid #27272a', borderRadius: '12px', padding: '20px', display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'center', textAlign: 'center' },
              children: [
                { id: `img-${idx}`, name: 'Avatar', styles: { width: '80px', height: '80px', borderRadius: '50%', objectFit: 'cover' }, content: { url: member.img } },
                { id: `name-${idx}`, name: 'Name', styles: { color: '#ffffff', fontSize: '16px', fontWeight: '700' }, content: { text: member.name } },
                { id: `role-${idx}`, name: 'Role', styles: { color: '#818cf8', fontSize: '12px', fontWeight: '600' }, content: { text: member.role } }
              ]
            }))
          }
        ]
      }]
    }
  ],
  Testimonials: [
    {
      id: 'testimonials-3col',
      name: 'Testimonials 3-Column Reviews',
      description: 'Customer review cards with star ratings, quotes, and reviewer profiles',
      sections: [{
        id: 'testi-sec', name: 'Testimonial Section', isContainer: true,
        styles: { display: 'flex', flexDirection: 'column', gap: '48px', padding: '80px 32px', backgroundColor: '#18181b', width: '100%' },
        children: [
          {
            id: 'testi-head', name: 'Header', isContainer: true,
            styles: { textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '8px' },
            children: [
              { id: 'h', name: 'Title', styles: { color: '#ffffff', fontSize: '32px', fontWeight: '800' }, content: { text: 'Loved by Developers Worldwide' } },
              { id: 'p', name: 'Subtitle', styles: { color: '#a1a1aa', fontSize: '15px' }, content: { text: 'See how teams accelerate their visual workflow with Siteflow Studio.' } }
            ]
          },
          {
            id: 'testi-grid', name: 'Reviews Grid', isContainer: true,
            styles: { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' },
            children: [
              { quote: 'Siteflow cut our front-end layout prototyping time by 70%. The exact breakpoint controls are unbeatable.', name: 'David Vance', title: 'VP of Engineering at FinTech Co' },
              { quote: 'Exporting clean CSS variable design tokens directly into our codebase saved weeks of refactoring.', name: 'Samantha Wu', title: 'Lead UI Architect at Pulse' },
              { quote: 'The fixed 1200px viewport preview gives us total confidence before pushing to production.', name: 'James Miller', title: 'Founder at LaunchPad' }
            ].map((item, idx) => ({
              id: `testi-card-${idx}`, name: `Review ${idx + 1}`, isContainer: true,
              styles: { backgroundColor: '#09090b', border: '1px solid #27272a', borderRadius: '12px', padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px', justifyContent: 'space-between' },
              children: [
                { id: `stars-${idx}`, name: 'Rating', styles: { color: '#f59e0b', fontSize: '14px', fontWeight: '800' }, content: { text: '★★★★★' } },
                { id: `quote-${idx}`, name: 'Quote Copy', styles: { color: '#d4d4d8', fontSize: '14px', lineHeight: '1.6', italic: true }, content: { text: `"${item.quote}"` } },
                {
                  id: `author-${idx}`, name: 'Author Group', isContainer: true, styles: { borderTop: '1px solid #18181b', paddingTop: '12px', display: 'flex', flexDirection: 'column', gap: '2px' },
                  children: [
                    { id: `n-${idx}`, name: 'Author Name', styles: { color: '#ffffff', fontSize: '13px', fontWeight: '700' }, content: { text: item.name } },
                    { id: `t-${idx}`, name: 'Author Title', styles: { color: '#71717a', fontSize: '11px' }, content: { text: item.title } }
                  ]
                }
              ]
            }))
          }
        ]
      }]
    }
  ],
  FAQ: [
    {
      id: 'faq-list',
      name: 'FAQ Accordion List',
      description: 'Frequently asked questions formatted in clear Q&A blocks',
      sections: [{
        id: 'faq-sec', name: 'FAQ Section', isContainer: true,
        styles: { display: 'flex', flexDirection: 'column', gap: '36px', padding: '80px 32px', backgroundColor: '#09090b', width: '100%', maxWidth: '800px', margin: '0 auto' },
        children: [
          {
            id: 'faq-head', name: 'Header', isContainer: true, styles: { textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '8px' },
            children: [
              { id: 'title', name: 'Title', styles: { color: '#ffffff', fontSize: '32px', fontWeight: '800' }, content: { text: 'Frequently Asked Questions' } },
              { id: 'sub', name: 'Subtext', styles: { color: '#a1a1aa', fontSize: '15px' }, content: { text: 'Everything you need to know about Siteflow Studio.' } }
            ]
          },
          {
            id: 'faq-items', name: 'Q&A Stack', isContainer: true, styles: { display: 'flex', flexDirection: 'column', gap: '16px' },
            children: [
              { q: 'Can I export raw HTML and CSS files?', a: 'Yes! Siteflow provides clean, un-minified HTML and CSS variable exports with zero framework vendor lock-in.' },
              { q: 'How does the fixed 1200px desktop viewport work?', a: 'The desktop canvas locks to a precise 1200px container width so your design remains consistent across any monitor size.' },
              { q: 'Are global swatches synced automatically?', a: 'All global color swatches dynamically update every matching element across all pages instantly.' }
            ].map((qa, idx) => ({
              id: `qa-${idx}`, name: `Q&A Block ${idx + 1}`, isContainer: true,
              styles: { backgroundColor: '#18181b', border: '1px solid #27272a', borderRadius: '8px', padding: '20px', display: 'flex', flexDirection: 'column', gap: '8px' },
              children: [
                { id: `q-${idx}`, name: 'Question', styles: { color: '#ffffff', fontSize: '16px', fontWeight: '700' }, content: { text: qa.q } },
                { id: `a-${idx}`, name: 'Answer', styles: { color: '#a1a1aa', fontSize: '14px', lineHeight: '1.6' }, content: { text: qa.a } }
              ]
            }))
          }
        ]
      }]
    }
  ],
  CTA: [
    {
      id: 'cta-banner-dark',
      name: 'CTA High-Contrast Banner',
      description: 'Dark full-width banner with bold call-to-action headline and primary button',
      sections: [{
        id: 'cta-sec', name: 'CTA Banner Section', isContainer: true,
        styles: { backgroundColor: '#1e1b4b', border: '1px solid #3730a3', borderRadius: '16px', padding: '64px 32px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px', width: '100%', margin: '40px 0' },
        children: [
          { id: 'h', name: 'CTA Heading', styles: { color: '#ffffff', fontSize: '36px', fontWeight: '800' }, content: { text: 'Ready to Build Your Next Web Project?' } },
          { id: 'p', name: 'CTA Subtext', styles: { color: '#c7d2fe', fontSize: '16px', maxWidth: '540px' }, content: { text: 'Get started today with our full visual canvas suite and design token engine.' } },
          { id: 'btn', name: 'Action Button', styles: { backgroundColor: '#ffffff', color: '#4338ca', padding: '14px 32px', borderRadius: '8px', fontSize: '15px', fontWeight: '800' }, content: { text: 'Start Building Free Now' } }
        ]
      }]
    }
  ],
  Contact: [
    {
      id: 'contact-split',
      name: 'Contact 2-Column Split',
      description: 'Contact info details on left paired with interactive inquiry form on right',
      sections: [{
        id: 'contact-sec', name: 'Contact Section', isContainer: true,
        styles: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', padding: '80px 32px', backgroundColor: '#09090b', width: '100%' },
        children: [
          {
            id: 'contact-left', name: 'Contact Info Left', isContainer: true, styles: { display: 'flex', flexDirection: 'column', gap: '20px' },
            children: [
              { id: 'h', name: 'Title', styles: { color: '#ffffff', fontSize: '36px', fontWeight: '800' }, content: { text: 'Get in Touch' } },
              { id: 'p', name: 'Body', styles: { color: '#a1a1aa', fontSize: '15px', lineHeight: '1.6' }, content: { text: 'Have questions about enterprise deployment or custom solutions? Our technical team is standing by.' } },
              {
                id: 'details', name: 'Details Group', isContainer: true, styles: { display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '16px' },
                children: [
                  { id: 'd1', name: 'Email', styles: { color: '#818cf8', fontSize: '14px', fontWeight: '600' }, content: { text: '📧 support@siteflow.studio' } },
                  { id: 'd2', name: 'Location', styles: { color: '#d4d4d8', fontSize: '14px' }, content: { text: '📍 San Francisco, CA • Global Remote' } }
                ]
              }
            ]
          },
          {
            id: 'contact-right-form', name: 'Inquiry Form Right', isContainer: true,
            styles: { backgroundColor: '#18181b', border: '1px solid #27272a', borderRadius: '12px', padding: '32px', display: 'flex', flexDirection: 'column', gap: '16px' },
            children: [
              { id: 'i1', name: 'Name Input', styles: { backgroundColor: '#09090b', border: '1px solid #3f3f46', color: '#ffffff', padding: '10px 14px', borderRadius: '6px' }, content: { placeholder: 'Your Name' } },
              { id: 'i2', name: 'Email Input', styles: { backgroundColor: '#09090b', border: '1px solid #3f3f46', color: '#ffffff', padding: '10px 14px', borderRadius: '6px' }, content: { placeholder: 'Your Work Email' } },
              { id: 'btn', name: 'Submit Button', styles: { backgroundColor: '#4f46e5', color: '#ffffff', padding: '12px', borderRadius: '6px', fontWeight: '700', textAlign: 'center' }, content: { text: 'Send Message' } }
            ]
          }
        ]
      }]
    }
  ],
  Logos: [
    {
      id: 'logos-banner',
      name: 'Logo Cloud Trust Banner',
      description: 'Horizontal row displaying client/partner logo badges with title statement',
      sections: [{
        id: 'logos-sec', name: 'Logos Section', isContainer: true,
        styles: { padding: '48px 32px', backgroundColor: '#18181b', borderTop: '1px solid #27272a', borderBottom: '1px solid #27272a', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px' },
        children: [
          { id: 'kicker', name: 'Kicker', styles: { color: '#71717a', fontSize: '11px', fontWeight: '800', letterSpacing: '0.15em', textTransform: 'uppercase' }, content: { text: 'POWERING NEXT-GEN TEAMS AT' } },
          {
            id: 'row', name: 'Logos Row', isContainer: true, styles: { display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '48px', flexWrap: 'wrap' },
            children: ['ACME CORP', 'NEXUS AI', 'PULSE LABS', 'VERITAS', 'SPECTRA'].map((name, i) => ({
              id: `logo-${i}`, name: name, styles: { color: '#a1a1aa', fontSize: '16px', fontWeight: '800', letterSpacing: '0.05em' }, content: { text: name }
            }))
          }
        ]
      }]
    }
  ],
  Gallery: [
    {
      id: 'gallery-3col',
      name: 'Gallery 3-Column Visual Grid',
      description: 'High-definition showcase grid featuring portfolio visuals and captions',
      sections: [{
        id: 'gallery-sec', name: 'Gallery Section', isContainer: true,
        styles: { padding: '80px 32px', backgroundColor: '#09090b', width: '100%', display: 'flex', flexDirection: 'column', gap: '32px' },
        children: [
          {
            id: 'h-grp', name: 'Header', isContainer: true, styles: { textAlign: 'center' },
            children: [
              { id: 'h', name: 'Title', styles: { color: '#ffffff', fontSize: '32px', fontWeight: '800' }, content: { text: 'Visual Showcase' } }
            ]
          },
          {
            id: 'grid', name: 'Grid Container', isContainer: true, styles: { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' },
            children: [
              { url: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80', title: 'Developer Workstation' },
              { url: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=600&q=80', title: 'Modern Workspace Desktop' },
              { url: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80', title: 'Digital Code Matrix' }
            ].map((item, idx) => ({
              id: `g-card-${idx}`, name: item.title, isContainer: true,
              styles: { backgroundColor: '#18181b', border: '1px solid #27272a', borderRadius: '8px', overflow: 'hidden', display: 'flex', flexDirection: 'column' },
              children: [
                { id: `img-${idx}`, name: 'Photo', styles: { width: '100%', height: '180px', objectFit: 'cover' }, content: { url: item.url } },
                { id: `cap-${idx}`, name: 'Caption', styles: { padding: '12px', color: '#d4d4d8', fontSize: '13px', fontWeight: '600' }, content: { text: item.title } }
              ]
            }))
          }
        ]
      }]
    }
  ]
};

// --- SECTION PRESETS CONSTANT ---
export interface SectionPreset {
  id: string;
  name: string;
  description: string;
  category: 'Grid' | 'Hero' | 'Feature' | 'Card' | 'Pricing';
  styles: Record<string, string>;
  generateChildren: (baseTs: number) => any[];
}

export const SECTION_PRESETS: SectionPreset[] = [
  {
    id: '2-column',
    name: '2-Column Split',
    description: 'Side-by-side content and visual column split',
    category: 'Grid',
    styles: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '32px',
      padding: '48px 32px',
      alignItems: 'center',
      backgroundColor: '#18181b',
      width: '100%'
    },
    generateChildren: (ts) => [
      {
        id: 'column-left',
        instanceId: ts + 1,
        name: 'Left Content Column',
        isContainer: true,
        styles: { display: 'flex', flexDirection: 'column', gap: '16px' },
        children: [
          { id: 'heading', instanceId: ts + 2, name: 'Column Title', styles: { color: '#ffffff', fontSize: '28px', fontWeight: '700' }, content: { text: 'Two Column Headline' } },
          { id: 'paragraph', instanceId: ts + 3, name: 'Column Body', styles: { color: '#a1a1aa', fontSize: '14px', lineHeight: '1.6' }, content: { text: 'Flexible two-column layout ideal for pairing text explanations with visual showcase elements.' } },
          { id: 'button', instanceId: ts + 4, name: 'Action Button', styles: { backgroundColor: '#4f46e5', color: '#ffffff', padding: '10px 20px', borderRadius: '4px', fontWeight: '600', alignSelf: 'flex-start' }, content: { text: 'Learn More' } }
        ]
      },
      {
        id: 'column-right',
        instanceId: ts + 5,
        name: 'Right Media Column',
        isContainer: true,
        styles: { display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: '#27272a', padding: '32px', borderRadius: '8px', border: '1px solid #3f3f46', minHeight: '200px' },
        children: [
          { id: 'heading', instanceId: ts + 6, name: 'Media Box', styles: { color: '#e4e4e7', fontSize: '16px', fontWeight: '600' }, content: { text: 'Media or Visual Card' } },
          { id: 'paragraph', instanceId: ts + 7, name: 'Media Note', styles: { color: '#71717a', fontSize: '12px', marginTop: '8px' }, content: { text: 'Insert images, charts, or video embeds here.' } }
        ]
      }
    ]
  },
  {
    id: '3-column',
    name: '3-Column Grid',
    description: 'Three equal width feature cards',
    category: 'Grid',
    styles: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '20px',
      padding: '48px 24px',
      backgroundColor: '#18181b',
      width: '100%'
    },
    generateChildren: (ts) => [1, 2, 3].map((num, i) => ({
      id: `card-${num}`,
      instanceId: ts + 10 + i,
      name: `Feature Card ${num}`,
      isContainer: true,
      styles: { backgroundColor: '#27272a', padding: '24px', borderRadius: '8px', border: '1px solid #3f3f46', display: 'flex', flexDirection: 'column', gap: '12px' },
      children: [
        { id: 'heading', instanceId: ts + 20 + i, name: `Card ${num} Title`, styles: { color: '#ffffff', fontSize: '18px', fontWeight: '700' }, content: { text: `Feature Title ${num}` } },
        { id: 'paragraph', instanceId: ts + 30 + i, name: `Card ${num} Desc`, styles: { color: '#a1a1aa', fontSize: '13px', lineHeight: '1.5' }, content: { text: 'Key capability description highlighting benefit and value to your visitors.' } }
      ]
    }))
  },
  {
    id: 'centered-feature',
    name: 'Centered Feature Block',
    description: 'Prominent central focal point with call-to-action',
    category: 'Feature',
    styles: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      padding: '64px 32px',
      gap: '16px',
      backgroundColor: '#18181b',
      width: '100%'
    },
    generateChildren: (ts) => [
      { id: 'heading', instanceId: ts + 50, name: 'Centered Title', styles: { color: '#ffffff', fontSize: '32px', fontWeight: '800', maxWidth: '600px' }, content: { text: 'Promote Your Core Value Proposition' } },
      { id: 'paragraph', instanceId: ts + 51, name: 'Subheadline', styles: { color: '#a1a1aa', fontSize: '15px', maxWidth: '520px', lineHeight: '1.6' }, content: { text: 'Capture immediate attention with a clean, centered focal section designed to drive conversions.' } },
      {
        id: 'btn-group',
        instanceId: ts + 52,
        name: 'Button Group',
        isContainer: true,
        styles: { display: 'flex', gap: '12px', marginTop: '12px' },
        children: [
          { id: 'button-primary', instanceId: ts + 53, name: 'Primary Button', styles: { backgroundColor: '#4f46e5', color: '#ffffff', padding: '10px 24px', borderRadius: '4px', fontWeight: '600' }, content: { text: 'Get Started' } },
          { id: 'button-secondary', instanceId: ts + 54, name: 'Secondary Button', styles: { backgroundColor: '#27272a', color: '#e4e4e7', border: '1px solid #3f3f46', padding: '10px 24px', borderRadius: '4px', fontWeight: '500' }, content: { text: 'View Demo' } }
        ]
      }
    ]
  },
  {
    id: 'hero-split',
    name: 'Hero Split Banner',
    description: 'Asymmetric high-impact hero header',
    category: 'Hero',
    styles: {
      display: 'grid',
      gridTemplateColumns: '1.2fr 0.8fr',
      gap: '40px',
      padding: '64px 32px',
      alignItems: 'center',
      backgroundColor: '#09090b',
      borderBottom: '1px solid #27272a',
      width: '100%'
    },
    generateChildren: (ts) => [
      {
        id: 'hero-left',
        instanceId: ts + 60,
        name: 'Hero Text Group',
        isContainer: true,
        styles: { display: 'flex', flexDirection: 'column', gap: '16px' },
        children: [
          { id: 'heading', instanceId: ts + 61, name: 'Hero Headline', styles: { color: '#ffffff', fontSize: '40px', fontWeight: '900', lineHeight: '1.1' }, content: { text: 'Build Smarter Digital Products Faster' } },
          { id: 'paragraph', instanceId: ts + 62, name: 'Hero Subtext', styles: { color: '#a1a1aa', fontSize: '16px', lineHeight: '1.6' }, content: { text: 'Empower your creative process with precise visual layout tooling and live component synthesis.' } },
          { id: 'button', instanceId: ts + 63, name: 'Hero CTA', styles: { backgroundColor: '#6366f1', color: '#ffffff', padding: '12px 28px', borderRadius: '6px', fontWeight: '700', alignSelf: 'flex-start' }, content: { text: 'Start Building Now' } }
        ]
      },
      {
        id: 'hero-right',
        instanceId: ts + 64,
        name: 'Hero Graphic Box',
        isContainer: true,
        styles: { backgroundColor: '#18181b', border: '1px solid #27272a', borderRadius: '12px', padding: '40px 24px', textAlign: 'center', minHeight: '260px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' },
        children: [
          { id: 'heading', instanceId: ts + 65, name: 'Graphic Title', styles: { color: '#818cf8', fontSize: '20px', fontWeight: '700' }, content: { text: 'Interactive Stage' } },
          { id: 'paragraph', instanceId: ts + 66, name: 'Graphic Sub', styles: { color: '#71717a', fontSize: '13px', marginTop: '8px' }, content: { text: 'Visual preview frame' } }
        ]
      }
    ]
  },
  {
    id: 'full-width-card',
    name: 'Full Width Card Banner',
    description: 'Framed container card for highlighted announcements',
    category: 'Card',
    styles: {
      display: 'flex',
      flexDirection: 'column',
      padding: '40px',
      backgroundColor: '#1e1b4b',
      border: '1px solid #3730a3',
      borderRadius: '12px',
      gap: '16px',
      width: '100%'
    },
    generateChildren: (ts) => [
      { id: 'heading', instanceId: ts + 70, name: 'Announcement Header', styles: { color: '#e0e7ff', fontSize: '24px', fontWeight: '800' }, content: { text: 'Special Platform Release' } },
      { id: 'paragraph', instanceId: ts + 71, name: 'Announcement Detail', styles: { color: '#c7d2fe', fontSize: '14px', lineHeight: '1.6' }, content: { text: 'Discover our updated component engine and responsive layout controls available for all projects.' } },
      { id: 'button', instanceId: ts + 72, name: 'Banner Link', styles: { backgroundColor: '#4338ca', color: '#ffffff', padding: '10px 20px', borderRadius: '6px', fontWeight: '600', alignSelf: 'flex-start' }, content: { text: 'Read Release Notes' } }
    ]
  },
  /* --- PRICING SECTION PRESETS --- */
  {
    id: 'pricing-3-tier',
    name: '3-Tier Pricing Table',
    description: '3-column side-by-side Starter, Pro (Popular), and Enterprise price cards',
    category: 'Pricing',
    styles: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '24px',
      padding: '56px 32px',
      backgroundColor: '#0f172a',
      width: '100%',
      alignItems: 'stretch'
    },
    generateChildren: (ts) => [
      {
        id: 'pricing-starter',
        instanceId: ts + 100,
        name: 'Starter Price Card',
        isContainer: true,
        styles: { display: 'flex', flexDirection: 'column', justifyContent: 'space-between', backgroundColor: '#1e293b', border: '1px solid #334155', borderRadius: '12px', padding: '28px', gap: '20px' },
        children: [
          {
            id: 'tier-header',
            instanceId: ts + 101,
            name: 'Header Group',
            isContainer: true,
            styles: { display: 'flex', flexDirection: 'column', gap: '8px' },
            children: [
              { id: 'heading-sub', instanceId: ts + 102, name: 'Tier Name', styles: { color: '#94a3b8', fontSize: '12px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em' }, content: { text: 'Starter Plan' } },
              { id: 'heading-price', instanceId: ts + 103, name: 'Price Tag', styles: { color: '#ffffff', fontSize: '32px', fontWeight: '800' }, content: { text: '$19 / mo' } },
              { id: 'paragraph-desc', instanceId: ts + 104, name: 'Plan Description', styles: { color: '#94a3b8', fontSize: '13px', lineHeight: '1.5' }, content: { text: 'Essential tooling for freelancers and solo projects.' } }
            ]
          },
          {
            id: 'tier-features',
            instanceId: ts + 105,
            name: 'Feature List',
            isContainer: true,
            styles: { display: 'flex', flexDirection: 'column', gap: '10px' },
            children: [
              { id: 'feat-1', instanceId: ts + 106, name: 'Feature Item', styles: { color: '#cbd5e1', fontSize: '13px' }, content: { text: '✓ Up to 5 Active Projects' } },
              { id: 'feat-2', instanceId: ts + 107, name: 'Feature Item', styles: { color: '#cbd5e1', fontSize: '13px' }, content: { text: '✓ Standard Component Preset Library' } },
              { id: 'feat-3', instanceId: ts + 108, name: 'Feature Item', styles: { color: '#cbd5e1', fontSize: '13px' }, content: { text: '✓ Community Support & Docs' } },
              { id: 'feat-4', instanceId: ts + 109, name: 'Feature Item', styles: { color: '#cbd5e1', fontSize: '13px' }, content: { text: '✓ 5GB Asset Cloud Storage' } }
            ]
          },
          { id: 'button-starter', instanceId: ts + 110, name: 'CTA Button', styles: { backgroundColor: '#334155', color: '#ffffff', padding: '12px 20px', borderRadius: '6px', fontWeight: '600', textAlign: 'center', width: '100%' }, content: { text: 'Get Started' } }
        ]
      },
      {
        id: 'pricing-pro',
        instanceId: ts + 120,
        name: 'Pro Price Card (Featured)',
        isContainer: true,
        styles: { display: 'flex', flexDirection: 'column', justifyContent: 'space-between', backgroundColor: '#1e1b4b', border: '2px solid #6366f1', borderRadius: '12px', padding: '28px', gap: '20px', boxShadow: '0 10px 25px -5px rgba(99, 102, 241, 0.25)' },
        children: [
          {
            id: 'badge-container',
            instanceId: ts + 121,
            name: 'Popular Badge',
            isContainer: true,
            styles: { display: 'inline-block', backgroundColor: '#6366f1', color: '#ffffff', fontSize: '10px', fontWeight: '800', padding: '4px 10px', borderRadius: '20px', letterSpacing: '0.05em', alignSelf: 'flex-start' },
            children: [
              { id: 'badge-text', instanceId: ts + 122, name: 'Badge Label', styles: { color: '#ffffff', fontSize: '10px', fontWeight: '800' }, content: { text: 'MOST POPULAR' } }
            ]
          },
          {
            id: 'tier-header-pro',
            instanceId: ts + 123,
            name: 'Header Group',
            isContainer: true,
            styles: { display: 'flex', flexDirection: 'column', gap: '8px' },
            children: [
              { id: 'heading-sub-pro', instanceId: ts + 124, name: 'Tier Name', styles: { color: '#a5b4fc', fontSize: '12px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em' }, content: { text: 'Pro Team' } },
              { id: 'heading-price-pro', instanceId: ts + 125, name: 'Price Tag', styles: { color: '#ffffff', fontSize: '36px', fontWeight: '900' }, content: { text: '$49 / mo' } },
              { id: 'paragraph-desc-pro', instanceId: ts + 126, name: 'Plan Description', styles: { color: '#c7d2fe', fontSize: '13px', lineHeight: '1.5' }, content: { text: 'Complete visual development suite for fast-moving teams.' } }
            ]
          },
          {
            id: 'tier-features-pro',
            instanceId: ts + 127,
            name: 'Feature List',
            isContainer: true,
            styles: { display: 'flex', flexDirection: 'column', gap: '10px' },
            children: [
              { id: 'feat-pro-1', instanceId: ts + 128, name: 'Feature Item', styles: { color: '#e0e7ff', fontSize: '13px', fontWeight: '600' }, content: { text: '✓ Unlimited Active Projects' } },
              { id: 'feat-pro-2', instanceId: ts + 129, name: 'Feature Item', styles: { color: '#e0e7ff', fontSize: '13px' }, content: { text: '✓ Clean Code Export & API Sync' } },
              { id: 'feat-pro-3', instanceId: ts + 130, name: 'Feature Item', styles: { color: '#e0e7ff', fontSize: '13px' }, content: { text: '✓ Priority 24/7 Fast-Track Support' } },
              { id: 'feat-pro-4', instanceId: ts + 131, name: 'Feature Item', styles: { color: '#e0e7ff', fontSize: '13px' }, content: { text: '✓ 100GB High-Speed Storage' } }
            ]
          },
          { id: 'button-pro', instanceId: ts + 132, name: 'CTA Button', styles: { backgroundColor: '#4f46e5', color: '#ffffff', padding: '12px 20px', borderRadius: '6px', fontWeight: '700', textAlign: 'center', width: '100%' }, content: { text: 'Start 14-Day Free Trial' } }
        ]
      },
      {
        id: 'pricing-enterprise',
        instanceId: ts + 140,
        name: 'Enterprise Price Card',
        isContainer: true,
        styles: { display: 'flex', flexDirection: 'column', justifyContent: 'space-between', backgroundColor: '#1e293b', border: '1px solid #334155', borderRadius: '12px', padding: '28px', gap: '20px' },
        children: [
          {
            id: 'tier-header-ent',
            instanceId: ts + 141,
            name: 'Header Group',
            isContainer: true,
            styles: { display: 'flex', flexDirection: 'column', gap: '8px' },
            children: [
              { id: 'heading-sub-ent', instanceId: ts + 142, name: 'Tier Name', styles: { color: '#94a3b8', fontSize: '12px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em' }, content: { text: 'Enterprise' } },
              { id: 'heading-price-ent', instanceId: ts + 143, name: 'Price Tag', styles: { color: '#ffffff', fontSize: '32px', fontWeight: '800' }, content: { text: '$199 / mo' } },
              { id: 'paragraph-desc-ent', instanceId: ts + 144, name: 'Plan Description', styles: { color: '#94a3b8', fontSize: '13px', lineHeight: '1.5' }, content: { text: 'Custom infrastructure, dedicated support & SLA guarantees.' } }
            ]
          },
          {
            id: 'tier-features-ent',
            instanceId: ts + 145,
            name: 'Feature List',
            isContainer: true,
            styles: { display: 'flex', flexDirection: 'column', gap: '10px' },
            children: [
              { id: 'feat-ent-1', instanceId: ts + 146, name: 'Feature Item', styles: { color: '#cbd5e1', fontSize: '13px' }, content: { text: '✓ Dedicated Technical Account Manager' } },
              { id: 'feat-ent-2', instanceId: ts + 147, name: 'Feature Item', styles: { color: '#cbd5e1', fontSize: '13px' }, content: { text: '✓ Single Sign-On (SSO) & SAML' } },
              { id: 'feat-ent-3', instanceId: ts + 148, name: 'Feature Item', styles: { color: '#cbd5e1', fontSize: '13px' }, content: { text: '✓ 99.99% Guaranteed Uptime SLA' } },
              { id: 'feat-ent-4', instanceId: ts + 149, name: 'Feature Item', styles: { color: '#cbd5e1', fontSize: '13px' }, content: { text: '✓ Custom Security Audit & Compliance' } }
            ]
          },
          { id: 'button-ent', instanceId: ts + 150, name: 'CTA Button', styles: { backgroundColor: '#334155', color: '#ffffff', padding: '12px 20px', borderRadius: '6px', fontWeight: '600', textAlign: 'center', width: '100%' }, content: { text: 'Contact Sales' } }
        ]
      }
    ]
  },
  {
    id: 'pricing-featured-spotlight',
    name: 'Featured Pricing Spotlight',
    description: 'Single focused price card with value highlights, guarantee badge, and full CTA',
    category: 'Pricing',
    styles: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '64px 24px',
      backgroundColor: '#18181b',
      width: '100%'
    },
    generateChildren: (ts) => [
      {
        id: 'pricing-spotlight-card',
        instanceId: ts + 200,
        name: 'Spotlight Card Wrapper',
        isContainer: true,
        styles: { display: 'flex', flexDirection: 'column', gap: '20px', backgroundColor: '#27272a', border: '1px solid #3f3f46', borderRadius: '16px', padding: '40px', maxWidth: '640px', width: '100%', boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.4)' },
        children: [
          { id: 'badge-spotlight', instanceId: ts + 201, name: 'Kicker Badge', styles: { color: '#a1a1aa', fontSize: '11px', fontWeight: '700', letterSpacing: '0.1em', textTransform: 'uppercase' }, content: { text: 'ALL-IN-ONE ACCESS PASS' } },
          { id: 'title-spotlight', instanceId: ts + 202, name: 'Card Title', styles: { color: '#ffffff', fontSize: '30px', fontWeight: '800' }, content: { text: 'Pro Unlimited Plan' } },
          {
            id: 'price-row-spotlight',
            instanceId: ts + 203,
            name: 'Price Banner',
            isContainer: true,
            styles: { display: 'flex', alignItems: 'baseline', gap: '8px' },
            children: [
              { id: 'price-number', instanceId: ts + 204, name: 'Big Price', styles: { color: '#818cf8', fontSize: '44px', fontWeight: '900' }, content: { text: '$79' } },
              { id: 'price-freq', instanceId: ts + 205, name: 'Frequency Subtext', styles: { color: '#a1a1aa', fontSize: '14px' }, content: { text: '/ month (billed annually)' } }
            ]
          },
          { id: 'desc-spotlight', instanceId: ts + 206, name: 'Card Summary', styles: { color: '#d4d4d8', fontSize: '14px', lineHeight: '1.6' }, content: { text: 'Access every section template, export pipeline, and responsive tooling feature with zero usage limits.' } },
          {
            id: 'grid-spotlight',
            instanceId: ts + 207,
            name: 'Feature Grid',
            isContainer: true,
            styles: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', padding: '16px', backgroundColor: '#18181b', borderRadius: '8px', border: '1px solid #27272a' },
            children: [
              { id: 'feat-s1', instanceId: ts + 208, name: 'Feature Item', styles: { color: '#e4e4e7', fontSize: '13px' }, content: { text: '✓ Unlimited Project Exports' } },
              { id: 'feat-s2', instanceId: ts + 209, name: 'Feature Item', styles: { color: '#e4e4e7', fontSize: '13px' }, content: { text: '✓ Custom Domains & SSL' } },
              { id: 'feat-s3', instanceId: ts + 210, name: 'Feature Item', styles: { color: '#e4e4e7', fontSize: '13px' }, content: { text: '✓ Unlimited Team Seats' } },
              { id: 'feat-s4', instanceId: ts + 211, name: 'Feature Item', styles: { color: '#e4e4e7', fontSize: '13px' }, content: { text: '✓ 24/7 Priority Support SLA' } }
            ]
          },
          { id: 'btn-spotlight', instanceId: ts + 212, name: 'Primary Action', styles: { backgroundColor: '#4f46e5', color: '#ffffff', padding: '14px 28px', borderRadius: '8px', fontWeight: '700', textAlign: 'center', width: '100%' }, content: { text: 'Get Instant Access' } },
          { id: 'guarantee-spotlight', instanceId: ts + 213, name: 'Guarantee Text', styles: { color: '#71717a', fontSize: '12px', textAlign: 'center' }, content: { text: '🔒 30-Day Money-Back Guarantee • Cancel Anytime' } }
        ]
      }
    ]
  },
  {
    id: 'pricing-dual-card',
    name: 'Dual Tier Pricing Switcher',
    description: '2-column side-by-side pricing layout comparing Creator and Business plans',
    category: 'Pricing',
    styles: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '32px',
      padding: '56px 32px',
      backgroundColor: '#09090b',
      width: '100%'
    },
    generateChildren: (ts) => [
      {
        id: 'pricing-creator',
        instanceId: ts + 300,
        name: 'Creator Card',
        isContainer: true,
        styles: { display: 'flex', flexDirection: 'column', justifyContent: 'space-between', backgroundColor: '#18181b', border: '1px solid #27272a', borderRadius: '12px', padding: '32px', gap: '20px' },
        children: [
          {
            id: 'header-creator',
            instanceId: ts + 301,
            name: 'Header Group',
            isContainer: true,
            styles: { display: 'flex', flexDirection: 'column', gap: '8px' },
            children: [
              { id: 'sub-creator', instanceId: ts + 302, name: 'Plan Name', styles: { color: '#38bdf8', fontSize: '12px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em' }, content: { text: 'Individual Creator' } },
              { id: 'price-creator', instanceId: ts + 303, name: 'Price Tag', styles: { color: '#ffffff', fontSize: '36px', fontWeight: '800' }, content: { text: '$29 / mo' } },
              { id: 'desc-creator', instanceId: ts + 304, name: 'Plan Description', styles: { color: '#a1a1aa', fontSize: '13px' }, content: { text: 'For solo builders and creators launching digital sites.' } }
            ]
          },
          {
            id: 'feats-creator',
            instanceId: ts + 305,
            name: 'Feature List',
            isContainer: true,
            styles: { display: 'flex', flexDirection: 'column', gap: '10px' },
            children: [
              { id: 'fc-1', instanceId: ts + 306, name: 'Feature Item', styles: { color: '#d4d4d8', fontSize: '13px' }, content: { text: '✓ 3 Active Site Builds' } },
              { id: 'fc-2', instanceId: ts + 307, name: 'Feature Item', styles: { color: '#d4d4d8', fontSize: '13px' }, content: { text: '✓ Standard CDN Hosting' } },
              { id: 'fc-3', instanceId: ts + 308, name: 'Feature Item', styles: { color: '#d4d4d8', fontSize: '13px' }, content: { text: '✓ Custom CSS & Font Support' } }
            ]
          },
          { id: 'btn-creator', instanceId: ts + 309, name: 'CTA Button', styles: { backgroundColor: '#27272a', color: '#ffffff', border: '1px solid #3f3f46', padding: '12px', borderRadius: '6px', fontWeight: '600', textAlign: 'center', width: '100%' }, content: { text: 'Select Creator Plan' } }
        ]
      },
      {
        id: 'pricing-business',
        instanceId: ts + 320,
        name: 'Business Card (Featured)',
        isContainer: true,
        styles: { display: 'flex', flexDirection: 'column', justifyContent: 'space-between', backgroundColor: '#18181b', border: '2px solid #4f46e5', borderRadius: '12px', padding: '32px', gap: '20px' },
        children: [
          {
            id: 'badge-biz',
            instanceId: ts + 321,
            name: 'Save Badge',
            isContainer: true,
            styles: { display: 'inline-block', backgroundColor: '#10b981', color: '#ffffff', fontSize: '10px', fontWeight: '800', padding: '4px 10px', borderRadius: '4px', alignSelf: 'flex-start' },
            children: [
              { id: 'badge-biz-txt', instanceId: ts + 322, name: 'Badge Text', styles: { color: '#ffffff', fontSize: '10px', fontWeight: '800' }, content: { text: 'SAVE 20% ANNUALLY' } }
            ]
          },
          {
            id: 'header-biz',
            instanceId: ts + 323,
            name: 'Header Group',
            isContainer: true,
            styles: { display: 'flex', flexDirection: 'column', gap: '8px' },
            children: [
              { id: 'sub-biz', instanceId: ts + 324, name: 'Plan Name', styles: { color: '#818cf8', fontSize: '12px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em' }, content: { text: 'Business Growth' } },
              { id: 'price-biz', instanceId: ts + 325, name: 'Price Tag', styles: { color: '#ffffff', fontSize: '36px', fontWeight: '800' }, content: { text: '$89 / mo' } },
              { id: 'desc-biz', instanceId: ts + 326, name: 'Plan Description', styles: { color: '#a1a1aa', fontSize: '13px' }, content: { text: 'For growing businesses requiring team publishing seats.' } }
            ]
          },
          {
            id: 'feats-biz',
            instanceId: ts + 327,
            name: 'Feature List',
            isContainer: true,
            styles: { display: 'flex', flexDirection: 'column', gap: '10px' },
            children: [
              { id: 'fb-1', instanceId: ts + 328, name: 'Feature Item', styles: { color: '#e4e4e7', fontSize: '13px', fontWeight: '600' }, content: { text: '✓ 15 Active Publishing Seats' } },
              { id: 'fb-2', instanceId: ts + 329, name: 'Feature Item', styles: { color: '#e4e4e7', fontSize: '13px' }, content: { text: '✓ Advanced Visitor Analytics' } },
              { id: 'fb-3', instanceId: ts + 330, name: 'Feature Item', styles: { color: '#e4e4e7', fontSize: '13px' }, content: { text: '✓ White-label HTML Exports' } },
              { id: 'fb-4', instanceId: ts + 331, name: 'Feature Item', styles: { color: '#e4e4e7', fontSize: '13px' }, content: { text: '✓ Dedicated Support Line' } }
            ]
          },
          { id: 'btn-biz', instanceId: ts + 332, name: 'CTA Button', styles: { backgroundColor: '#4f46e5', color: '#ffffff', padding: '12px', borderRadius: '6px', fontWeight: '700', textAlign: 'center', width: '100%' }, content: { text: 'Upgrade to Business' } }
        ]
      }
    ]
  }
];

const ELEMENT_LIBRARY = {
  'Section Presets': SECTION_PRESETS.map(preset => ({
    id: `preset-${preset.id}`,
    name: preset.name,
    icon: preset.category === 'Pricing' ? <CreditCard size={18} strokeWidth={1} /> : <Grid size={18} strokeWidth={1} />,
    desc: `[${preset.category}] ${preset.description}`,
    isContainer: true,
    styles: preset.styles,
    presetId: preset.id
  })),
  Structure: [
    { id: 'section', name: 'Section', icon: <Box size={18} strokeWidth={1} />, desc: 'Full-width block.', isContainer: true, styles: { display: 'block', paddingTop: '0px', paddingBottom: '0px', width: '100%', borderRadius: '0px' } },
    { id: 'container', name: 'Container', icon: <Maximize size={18} strokeWidth={1} />, desc: 'Bounded wrapper.', isContainer: true, styles: { display: 'block', marginLeft: 'auto', marginRight: 'auto', maxWidth: '940px', width: '100%', borderRadius: '0px' } },
    { id: 'v-flex', name: 'V flex', icon: <AlignCenter size={18} strokeWidth={1} className="rotate-90" />, desc: 'Vertical stack.', isContainer: true, styles: { display: 'flex', flexDirection: 'column', gap: '0px', width: '100%', borderRadius: '0px' } },
    { id: 'h-flex', name: 'H flex', icon: <AlignCenter size={18} strokeWidth={1} />, desc: 'Horizontal stack.', isContainer: true, styles: { display: 'flex', flexDirection: 'row', gap: '0px', alignItems: 'center', width: '100%', borderRadius: '0px' } },
  ],
  Basic: [
    { id: 'div-block', name: 'Div block', icon: <BoxSelect size={18} strokeWidth={1} />, desc: 'General purpose wrapper.', isContainer: true, styles: { display: 'block', width: '100%', borderRadius: '0px' } },
    { id: 'list', name: 'List', icon: <List size={18} strokeWidth={1} />, desc: 'Standard list container.', isContainer: true, styles: { display: 'block', borderRadius: '0px' } },
    { id: 'button', name: 'Button', icon: <MousePointerClick size={18} strokeWidth={1} />, desc: 'Standard action.', styles: { display: 'inline-block', paddingTop: '8px', paddingRight: '10px', paddingBottom: '8px', paddingLeft: '10px', backgroundColor: '#2b2b2b', color: '#ffffff', borderRadius: '0px', fontSize: '13px' }, content: { text: 'Button' } },
    { id: 'coffee', name: 'Coffee', icon: <Coffee size={18} strokeWidth={1} />, desc: 'Support link.', styles: { display: 'inline-block', paddingTop: '8px', paddingRight: '10px', paddingBottom: '8px', paddingLeft: '10px', backgroundColor: '#333', color: '#fff', borderRadius: '0px', fontSize: '13px' }, content: { text: 'Buy me a coffee' } },
    { id: 'link-block', name: 'Link block', icon: <Link size={18} strokeWidth={1} />, desc: 'Clickable wrapper.', isContainer: true, styles: { display: 'block', textDecoration: 'none', borderRadius: '0px' } },
  ],
  Typography: [
    { id: 'heading', name: 'Heading', icon: <HeadingIcon size={18} strokeWidth={1} />, desc: 'Main title.', styles: { display: 'block', fontSize: '32px', color: '#2b2b2b', textAlign: 'left', lineHeight: '1.2' }, content: { text: 'Heading' } },
    { id: 'paragraph', name: 'Paragraph', icon: <TextLines size={18} strokeWidth={1} />, desc: 'Body copy.', styles: { display: 'block', fontSize: '15px', color: '#454545', lineHeight: '1.5' }, content: { text: 'Sentence case content follows technical rules.' } },
    { id: 'text-block', name: 'Text block', icon: <AlignLeft size={18} strokeWidth={1} />, desc: 'Inline string.', styles: { display: 'inline-block' }, content: { text: 'Text block' } },
  ],
  Media: [
    { id: 'image', name: 'Image', icon: <ImageIcon size={18} strokeWidth={1} />, desc: 'Asset container.', styles: { width: '100%', height: 'auto', display: 'block', borderRadius: '0px' }, content: { url: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80' } },
    { id: 'video', name: 'Video', icon: <PlayCircle size={18} strokeWidth={1} />, desc: 'Video player.', styles: { width: '100%', aspectRatio: '16/9', backgroundColor: '#000', borderRadius: '0px' } },
  ],
  Forms: [
    { id: 'form-block', name: 'Form block', icon: <Layout size={18} strokeWidth={1} />, desc: 'Form wrapper.', isContainer: true, styles: { display: 'block', padding: '0px', borderRadius: '0px' } },
    { id: 'input', name: 'Input', icon: <TextCursorInput size={18} strokeWidth={1} />, desc: 'Text input.', styles: { display: 'block', width: '100%', padding: '8px 12px', border: '1px solid #ddd', borderRadius: '0px' }, content: { placeholder: 'Type here...' } },
    { id: 'checkbox', name: 'Checkbox', icon: <CheckSquare size={18} strokeWidth={1} />, desc: 'Toggle input.', styles: { width: '16px', height: '16px', borderRadius: '0px' } },
  ],
  CMS: [
    { id: 'collection-list', name: 'Collection list', icon: <Database size={18} strokeWidth={1} />, desc: 'Dynamic data list.', isContainer: true, styles: { display: 'block', borderRadius: '0px' } },
  ],
  Advanced: [
    { id: 'navbar', name: 'Navbar', icon: <Home size={18} strokeWidth={1} />, desc: 'Navigation.', isContainer: true, styles: { display: 'flex', justifyContent: 'space-between', padding: '12px 24px', borderBottom: '1px solid #eee', borderRadius: '0px' } },
    { id: 'tabs', name: 'Tabs', icon: <Layers size={18} strokeWidth={1} />, desc: 'Tabbed sections.', isContainer: true, styles: { display: 'block', borderRadius: '0px' } },
  ]
};

export interface StockImage {
  id: string;
  title: string;
  url: string;
  category: string;
  dimensions?: string;
  photographer?: string;
}

export const STOCK_IMAGE_CATEGORIES = [
  {
    id: 'tech',
    name: 'Technology & Workspace',
    description: 'Modern developer setups, workstations, code, and digital interfaces',
    images: [
      { id: 'tech-1', title: 'Minimal Developer Setup', url: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80', category: 'tech', dimensions: '1200x800', photographer: 'Christopher Gower' },
      { id: 'tech-2', title: 'Modern Workspace Desktop', url: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=80', category: 'tech', dimensions: '1200x800', photographer: 'Clément Hélardot' },
      { id: 'tech-3', title: 'Digital Code Matrix', url: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80', category: 'tech', dimensions: '1200x800', photographer: 'Fotis Fotopoulos' },
      { id: 'tech-4', title: 'Analytics SaaS Dashboard', url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80', category: 'tech', dimensions: '1200x800', photographer: 'Luke Chesser' },
      { id: 'tech-5', title: 'Creative Laptop Station', url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80', category: 'tech', dimensions: '1200x800', photographer: 'Carlos Muza' },
      { id: 'tech-6', title: 'Mobile App Wireframe Design', url: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=1200&q=80', category: 'tech', dimensions: '1200x800', photographer: 'UX Store' },
    ]
  },
  {
    id: 'architecture',
    name: 'Architecture & Interiors',
    description: 'Contemporary building facades, minimalist interiors, and modern spaces',
    images: [
      { id: 'arch-1', title: 'Minimal Concrete Facade', url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80', category: 'architecture', dimensions: '1200x800', photographer: 'Sean Pollock' },
      { id: 'arch-2', title: 'Luminous Office Atrium', url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80', category: 'architecture', dimensions: '1200x800', photographer: 'Alex Kotliarskyi' },
      { id: 'arch-3', title: 'Scandinavian Living Interior', url: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80', category: 'architecture', dimensions: '1200x800', photographer: 'Spacejoy' },
      { id: 'arch-4', title: 'Glass Tower Reflections', url: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80', category: 'architecture', dimensions: '1200x800', photographer: 'Evelyn Semenyuk' },
      { id: 'arch-5', title: 'Warm Interior Lounge', url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80', category: 'architecture', dimensions: '1200x800', photographer: 'R-Architecture' },
      { id: 'arch-6', title: 'Symmetrical Modern Stairs', url: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=1200&q=80', category: 'architecture', dimensions: '1200x800', photographer: 'Maik Jonietz' },
    ]
  },
  {
    id: 'people',
    name: 'People & Business',
    description: 'Professional portraits, team collaboration, and creative agency settings',
    images: [
      { id: 'people-1', title: 'Collaborative Team Session', url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80', category: 'people', dimensions: '1200x800', photographer: 'Annie Spratt' },
      { id: 'people-2', title: 'Creative Executive Portrait', url: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=80', category: 'people', dimensions: '1200x800', photographer: 'Christina @ wocintechchat' },
      { id: 'people-3', title: 'Product Design Workshop', url: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80', category: 'people', dimensions: '1200x800', photographer: 'Mapbox' },
      { id: 'people-4', title: 'Agile Team Sprint', url: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=80', category: 'people', dimensions: '1200x800', photographer: 'Austin Distel' },
      { id: 'people-5', title: 'Focused Developer Portrait', url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1200&q=80', category: 'people', dimensions: '1200x800', photographer: 'Joseph Gonzalez' },
      { id: 'people-6', title: 'Creative Studio Brainstorm', url: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1200&q=80', category: 'people', dimensions: '1200x800', photographer: 'Visuals' },
    ]
  },
  {
    id: 'nature',
    name: 'Nature & Landscapes',
    description: 'Serene mountain peaks, forest mist, coastal horizons, and landscapes',
    images: [
      { id: 'nature-1', title: 'Alpine Mountain Ridge', url: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80', category: 'nature', dimensions: '1200x800', photographer: 'Bailey Zindel' },
      { id: 'nature-2', title: 'Lush Pine Forest Mist', url: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=80', category: 'nature', dimensions: '1200x800', photographer: 'Sebastien Gabriel' },
      { id: 'nature-3', title: 'Golden Coastal Horizon', url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80', category: 'nature', dimensions: '1200x800', photographer: 'Sean Oulashin' },
      { id: 'nature-4', title: 'Ethereal Desert Dunes', url: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1200&q=80', category: 'nature', dimensions: '1200x800', photographer: 'Sora Sagano' },
      { id: 'nature-5', title: 'Emerald Lake Reflections', url: 'https://images.unsplash.com/photo-1439853949127-fa647821eba0?auto=format&fit=crop&w=1200&q=80', category: 'nature', dimensions: '1200x800', photographer: 'Kalvis Alberts' },
      { id: 'nature-6', title: 'Autumn Canopy Vista', url: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80', category: 'nature', dimensions: '1200x800', photographer: 'Vicky Sim' },
    ]
  },
  {
    id: 'abstract',
    name: 'Abstract & Textures',
    description: '3D geometric flows, fluid gradients, dark ambient textures, and art',
    images: [
      { id: 'abstract-1', title: 'Dark Gradient Wave', url: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80', category: 'abstract', dimensions: '1200x800', photographer: 'Milad Fakurian' },
      { id: 'abstract-2', title: 'Iridescent Glass Spheres', url: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=1200&q=80', category: 'abstract', dimensions: '1200x800', photographer: 'Google DeepMind' },
      { id: 'abstract-3', title: 'Monochromatic Shadows', url: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=1200&q=80', category: 'abstract', dimensions: '1200x800', photographer: 'Kvistholt Photography' },
      { id: 'abstract-4', title: 'Neon Cyberspace Flow', url: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&w=1200&q=80', category: 'abstract', dimensions: '1200x800', photographer: 'Pavel Czerwinski' },
      { id: 'abstract-5', title: 'Silky 3D Fluid', url: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&w=1200&q=80', category: 'abstract', dimensions: '1200x800', photographer: 'Mo' },
      { id: 'abstract-6', title: 'Prismatic Light Refraction', url: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?auto=format&fit=crop&w=1200&q=80', category: 'abstract', dimensions: '1200x800', photographer: 'Gradienta' },
    ]
  },
  {
    id: 'lifestyle',
    name: 'Food & Lifestyle',
    description: 'Artisanal coffee, gourmet cuisine, travel culture, and product styling',
    images: [
      { id: 'lifestyle-1', title: 'Artisanal Pour-Over Coffee', url: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80', category: 'lifestyle', dimensions: '1200x800', photographer: 'Nathan Dumlao' },
      { id: 'lifestyle-2', title: 'Minimalist Tableware', url: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80', category: 'lifestyle', dimensions: '1200x800', photographer: 'Jason Briscoe' },
      { id: 'lifestyle-3', title: 'Fresh Harvest Spread', url: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=1200&q=80', category: 'lifestyle', dimensions: '1200x800', photographer: 'Brooke Lark' },
      { id: 'lifestyle-4', title: 'Aesthetic Morning Workspace', url: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=1200&q=80', category: 'lifestyle', dimensions: '1200x800', photographer: 'Jazmin Quaynor' },
      { id: 'lifestyle-5', title: 'Minimal Botanical Styling', url: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=1200&q=80', category: 'lifestyle', dimensions: '1200x800', photographer: 'Scott Webb' },
      { id: 'lifestyle-6', title: 'Gourmet Bistro Atmosphere', url: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80', category: 'lifestyle', dimensions: '1200x800', photographer: 'Petr Sevcik' },
    ]
  }
];

// --- SUB-COMPONENTS ---

const ActivityRail = ({ active, setActive, isCollapsed, toggleCollapse }: { active: string | null, setActive: (id: string | null) => void, isCollapsed?: boolean, toggleCollapse?: () => void }) => (
  <aside className="w-[52px] bg-[#2b2b2b] border-r border-white/5 flex flex-col items-center py-6 gap-6 z-[60] shrink-0">
    <div className="w-8 h-8 bg-[#f4f4f4] rounded-none flex items-center justify-center mb-2 shadow-lg text-[#2b2b2b]"><Sparkles size={18} /></div>
    <div className="flex flex-col gap-1 w-full items-center">
      {[
        { id: 'add', icon: <Plus size={22} />, title: 'Add Elements' },
        { id: 'images', icon: <ImageIcon size={18} />, title: 'Image Asset Library' },
        { id: 'pages', icon: <Files size={18} />, title: 'Pages' },
        { id: 'navigator', icon: <Layers size={18} />, title: 'Navigator' }
      ].map(btn => (
        <button 
          key={btn.id} 
          onClick={() => setActive(active === btn.id && !isCollapsed ? null : btn.id)} 
          title={btn.title} 
          className={`p-3 rounded-none transition-all relative ${active === btn.id && !isCollapsed ? 'bg-white/5 opacity-100 text-indigo-400' : 'opacity-40 hover:opacity-100'}`}
        >
          {btn.icon}
          {active === btn.id && !isCollapsed && <div className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-6 bg-indigo-500" />}
        </button>
      ))}
    </div>

    {toggleCollapse && (
      <button 
        onClick={toggleCollapse} 
        className="p-2.5 rounded-none text-[#888] hover:text-white hover:bg-white/5 transition-all" 
        title={isCollapsed ? "Expand Left Column (320px)" : "Collapse Left Column"}
      >
        {isCollapsed ? <PanelLeftOpen size={18} className="text-indigo-400" /> : <PanelLeftClose size={18} />}
      </button>
    )}

    <div className="mt-auto flex flex-col gap-4 items-center w-full pb-2">
       <button className="opacity-20 hover:opacity-100 transition-opacity"><Coffee size={18} /></button>
       <button className="opacity-20 hover:opacity-100 transition-opacity"><Settings size={18} /></button>
    </div>
  </aside>
);

interface RenderNodeProps {
  node: any;
  selectedId: string | null;
  onSelect: (id: string, rect?: DOMRect) => void;
  onDelete: (id: string) => void;
  isPreviewMode?: boolean;
}

const RenderNode: React.FC<RenderNodeProps> = ({ node, selectedId, onSelect, onDelete, isPreviewMode = false }) => {
  const isSelected = !isPreviewMode && selectedId === node.instanceId;
  const handleNodeClick = (e: React.MouseEvent) => { 
      if (isPreviewMode) return;
      e.stopPropagation(); 
      const rect = e.currentTarget.getBoundingClientRect();
      onSelect(node.instanceId, rect); 
  };

  return (
    <div 
      onClick={handleNodeClick} 
      style={{ ...node.styles, position: 'relative', boxSizing: 'border-box' }} 
      className={`transition-all border ${
        isPreviewMode 
          ? 'border-transparent' 
          : isSelected 
            ? 'border-indigo-500/50 bg-indigo-500/[0.01]' 
            : 'border-transparent hover:border-black/5'
      }`}
    >
      {isSelected && !isPreviewMode && (
        <div className="absolute -bottom-3 left-2 z-20 bg-[#454545] text-[#f4f4f4] text-[8px] px-1.5 py-0.5 border border-white/10 flex items-center gap-1.5 uppercase tracking-wider shadow-xl rounded-none pointer-events-auto">
          {node.name}
          <button onClick={(e) => { e.stopPropagation(); onDelete(node.instanceId); }} className="hover:text-red-400 ml-1 border-l border-white/10 pl-1.5 font-normal"><Trash2 size={10}/></button>
        </div>
      )}

      {node.id === 'heading' && <h1 style={{ margin: 0, padding: 0, fontSize: 'inherit', color: 'inherit', textAlign: 'inherit', lineHeight: 'inherit', fontWeight: 'inherit', textDecoration: 'inherit' }}>{node.content?.text ?? 'Heading'}</h1>}
      {node.id === 'paragraph' && <p style={{ margin: 0, padding: 0, fontSize: 'inherit', color: 'inherit', textAlign: 'inherit', lineHeight: 'inherit', fontWeight: 'inherit', textDecoration: 'inherit' }}>{node.content?.text ?? 'Sentence case content follows technical rules.'}</p>}
      {node.id === 'button' && <button style={{ ...node.styles }}>{node.content?.text ?? 'Button'}</button>}
      {node.id === 'coffee' && <button style={{ ...node.styles }}>{node.content?.text ?? 'Buy me a coffee'}</button>}
      {node.id === 'text-block' && <span style={{ fontSize: 'inherit', color: 'inherit', fontWeight: 'inherit', textDecoration: 'inherit' }}>{node.content?.text ?? 'Text block'}</span>}
      {node.id === 'image' && <img src={node.content?.url ?? ''} style={{ width: '100%', height: 'auto', display: 'block' }} alt="" />}
      {node.id === 'video' && <div style={{ ...node.styles, display: 'flex', itemsCenter: 'center', justifyContent: 'center' }}><Play size={32} opacity={0.2}/></div>}
      {node.id === 'input' && <input placeholder={node.content?.placeholder ?? 'Type here...'} style={{ ...node.styles, width: '100%' }} readOnly />}
      {node.id === 'checkbox' && <input type="checkbox" style={{ ...node.styles }} readOnly />}
      
      {node.children && node.children.map((child: any) => <RenderNode key={child.instanceId} node={child} selectedId={selectedId} onSelect={onSelect} onDelete={onDelete} isPreviewMode={isPreviewMode} />)}
      {node.isContainer && (!node.children || node.children.length === 0) && (
        <div className={`border border-dashed py-4 text-[9px] text-center uppercase tracking-[0.2em] pointer-events-none font-normal ${
          isPreviewMode ? 'border-transparent text-transparent opacity-0 h-0 p-0 overflow-hidden' : 'border-slate-200 text-slate-300'
        }`}>Empty {node.name}</div>
      )}
    </div>
  );
};

// Helper to find all descendant IDs for a node
const getAllDescendantIds = (node: any): any[] => {
    let ids = [node.instanceId];
    if (node.children) {
        node.children.forEach((child: any) => {
            ids = [...ids, ...getAllDescendantIds(child)];
        });
    }
    return ids;
};

interface NavigatorItemProps {
  node: any;
  depth: number;
  selectedId: string | null;
  onSelect: (id: string) => void;
  collapsedIds: Set<any>;
  onToggle: (id: any) => void;
  onShowMenu: (node: any, pos: {x: number, y: number}) => void;
  draggedNodeId: string | null;
  setDraggedNodeId: (id: string | null) => void;
  dropTarget: { id: string; position: 'before' | 'after' | 'inside' } | null;
  setDropTarget: (val: { id: string; position: 'before' | 'after' | 'inside' } | null) => void;
  onReorder: (sourceId: string, targetId: string, position: 'before' | 'after' | 'inside') => void;
  onMoveDirection: (id: string, direction: 'up' | 'down') => void;
}

const NavigatorItem: React.FC<NavigatorItemProps> = ({ 
  node, depth, selectedId, onSelect, collapsedIds, onToggle, onShowMenu,
  draggedNodeId, setDraggedNodeId, dropTarget, setDropTarget, onReorder, onMoveDirection
}) => {
    const hasChildren = node.children && node.children.length > 0;
    const isCollapsed = collapsedIds.has(node.instanceId);
    const isSelected = selectedId === node.instanceId;
    const timerRef = useRef<any>(null);

    const isDraggingThis = draggedNodeId === node.instanceId;
    const isDropTargetThis = dropTarget?.id === node.instanceId && !isDraggingThis;
    const isDropTargetBefore = isDropTargetThis && dropTarget?.position === 'before';
    const isDropTargetAfter = isDropTargetThis && dropTarget?.position === 'after';
    const isDropTargetInside = isDropTargetThis && dropTarget?.position === 'inside';

    const handleMouseDown = (e: React.MouseEvent) => {
        if (!hasChildren) return;
        const rect = e.currentTarget.getBoundingClientRect();
        timerRef.current = setTimeout(() => {
            onShowMenu(node, { x: rect.left + 20, y: rect.top });
        }, 500);
    };

    const handleMouseUp = () => {
        if (timerRef.current) {
            clearTimeout(timerRef.current);
            timerRef.current = null;
        }
    };

    return (
        <div>
            <div 
                draggable
                onDragStart={(e) => {
                    e.stopPropagation();
                    e.dataTransfer.setData('text/plain', node.instanceId);
                    e.dataTransfer.effectAllowed = 'move';
                    setDraggedNodeId(node.instanceId);
                }}
                onDragEnd={(e) => {
                    e.stopPropagation();
                    setDraggedNodeId(null);
                    setDropTarget(null);
                }}
                onDragOver={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    if (!draggedNodeId || draggedNodeId === node.instanceId) return;

                    const rect = e.currentTarget.getBoundingClientRect();
                    const offsetY = e.clientY - rect.top;
                    const height = rect.height;

                    let position: 'before' | 'after' | 'inside' = 'after';
                    if (offsetY < height * 0.3) {
                        position = 'before';
                    } else if (offsetY > height * 0.7) {
                        position = 'after';
                    } else {
                        position = (node.isContainer || (node.children && node.children.length >= 0)) ? 'inside' : 'after';
                    }

                    setDropTarget({ id: node.instanceId, position });
                }}
                onDragLeave={(e) => {
                    e.stopPropagation();
                    if (dropTarget?.id === node.instanceId) {
                        setDropTarget(null);
                    }
                }}
                onDrop={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    const sourceId = draggedNodeId || e.dataTransfer.getData('text/plain');
                    if (sourceId && dropTarget) {
                        onReorder(sourceId, dropTarget.id, dropTarget.position);
                    }
                    setDraggedNodeId(null);
                    setDropTarget(null);
                }}
                className={`group/nav-item relative flex items-center justify-between py-1 px-2 rounded-sm cursor-pointer mb-0.5 transition-all select-none ${
                    isDraggingThis ? 'opacity-30 border border-dashed border-indigo-400 bg-indigo-500/10' :
                    isSelected ? 'bg-[#0055FF] text-white shadow-sm' : 'text-[#999] hover:bg-white/5 hover:text-[#f4f4f4]'
                } ${
                    isDropTargetBefore ? 'border-t-2 border-indigo-500 bg-indigo-500/10' : ''
                } ${
                    isDropTargetAfter ? 'border-b-2 border-indigo-500 bg-indigo-500/10' : ''
                } ${
                    isDropTargetInside ? 'bg-indigo-500/20 border border-indigo-500/50 text-white' : ''
                }`}
                style={{ paddingLeft: `${depth * 12 + 6}px` }}
                onClick={(e) => { e.stopPropagation(); onSelect(node.instanceId); }}
            >
                <div className="flex items-center gap-1 min-w-0 flex-1 truncate">
                    <GripVertical size={11} className="text-[#666] group-hover/nav-item:text-[#ccc] shrink-0 cursor-grab active:cursor-grabbing opacity-0 group-hover/nav-item:opacity-100 transition-opacity" />
                    
                    <div 
                        className="p-0.5 cursor-pointer opacity-70 hover:opacity-100 relative shrink-0"
                        onClick={(e) => { 
                            if (!timerRef.current) {
                                e.stopPropagation(); 
                                onToggle(node.instanceId); 
                            }
                        }}
                        onMouseDown={handleMouseDown}
                        onMouseUp={handleMouseUp}
                        onMouseLeave={handleMouseUp}
                    >
                        {hasChildren ? (
                            <ChevronDown size={10} className={`transition-transform duration-150 ${isCollapsed ? '-rotate-90' : ''}`} />
                        ) : <div className="w-2.5" />}
                    </div>
                    
                    <div className="mr-1 opacity-80 scale-90 shrink-0">{node.icon || <Box size={14}/>}</div>
                    <span className="text-[11px] truncate">{node.name}</span>
                </div>

                <div className="flex items-center gap-0.5 opacity-0 group-hover/nav-item:opacity-100 transition-opacity shrink-0 ml-1">
                    <button 
                        onClick={(e) => { e.stopPropagation(); onMoveDirection(node.instanceId, 'up'); }}
                        className="p-1 hover:bg-white/20 rounded-xs text-[#aaa] hover:text-white transition-colors"
                        title="Move Up"
                    >
                        <ChevronUp size={11} />
                    </button>
                    <button 
                        onClick={(e) => { e.stopPropagation(); onMoveDirection(node.instanceId, 'down'); }}
                        className="p-1 hover:bg-white/20 rounded-xs text-[#aaa] hover:text-white transition-colors"
                        title="Move Down"
                    >
                        <ChevronDown size={11} />
                    </button>
                </div>
            </div>
            
            {hasChildren && !isCollapsed && (
                <div>
                    {node.children.map((child: any) => (
                        <NavigatorItem 
                            key={child.instanceId} 
                            node={child} 
                            depth={depth + 1} 
                            selectedId={selectedId} 
                            onSelect={onSelect} 
                            collapsedIds={collapsedIds} 
                            onToggle={onToggle}
                            onShowMenu={onShowMenu}
                            draggedNodeId={draggedNodeId}
                            setDraggedNodeId={setDraggedNodeId}
                            dropTarget={dropTarget}
                            setDropTarget={setDropTarget}
                            onReorder={onReorder}
                            onMoveDirection={onMoveDirection}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

// --- INSPECTOR COMPONENTS ---

const InspectorSection = ({ title, isOpen, onToggle, children, onAdd = undefined }: { title: string, isOpen: boolean, onToggle: () => void, children: React.ReactNode, onAdd?: () => void }) => (
    <div className="border-b border-white/5">
        <div className="flex items-center justify-between p-3 cursor-pointer hover:bg-white/[0.02]" onClick={onToggle}>
            <h4 className="text-[11px] font-bold text-[#d1d1d1] uppercase tracking-wider">{title}</h4>
            <div className="flex items-center gap-2">
                {onAdd && <button onClick={(e) => { e.stopPropagation(); onAdd(); }} className="opacity-50 hover:opacity-100" title="Add Swatch"><Plus size={12}/></button>}
                <ChevronRight size={12} className={`opacity-30 transition-transform duration-200 ${isOpen ? 'rotate-90' : ''}`} />
            </div>
        </div>
        {isOpen && <div className="px-3 pb-4">{children}</div>}
    </div>
);

const PropertyRow = ({ label, children, half = false }: { label: string, children: React.ReactNode, half?: boolean }) => (
    <div className={`flex items-center justify-between mb-2 ${half ? 'w-[48%]' : 'w-full'}`}>
        <label className="text-[10px] text-[#999] font-normal cursor-default">{label}</label>
        <div className="w-[60%] flex justify-end">{children}</div>
    </div>
);

const TextInput = ({ value, onChange, unit = undefined, className = '' }: { value: any, onChange: (val: string) => void, unit?: string, className?: string }) => (
    <div className={`flex items-center bg-[#1a1a1a] border border-white/10 rounded-sm px-1.5 py-1 focus-within:border-indigo-500/50 transition-colors ${className}`}>
        <input className="w-full bg-transparent text-[11px] text-[#eee] outline-none font-mono" value={value} onChange={(e) => onChange(e.target.value)} />
        {unit && <span className="text-[9px] text-[#555] ml-1 uppercase">{unit}</span>}
    </div>
);

const ColorInput = ({ value, onChange }: { value: string, onChange: (val: string) => void }) => {
    const pickerVal = value && value.startsWith('#') && (value.length === 7 || value.length === 4) 
        ? (value.length === 4 ? `#${value[1]}${value[1]}${value[2]}${value[2]}${value[3]}${value[3]}` : value) 
        : '#2b2b2b';
    return (
        <div className="flex items-center gap-2 w-full">
            <div className="w-4 h-4 rounded-sm border border-white/20 shrink-0 relative overflow-hidden cursor-pointer shadow-sm" style={{ backgroundColor: value }}>
                <input 
                    type="color" 
                    value={pickerVal} 
                    onChange={e => onChange(e.target.value)} 
                    className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                    title="Pick color"
                />
            </div>
            <div className="flex-1 flex items-center bg-[#1a1a1a] border border-white/10 rounded-sm px-1.5 py-1">
                <input className="w-full bg-transparent text-[11px] text-[#eee] outline-none font-mono" value={value} onChange={(e) => onChange(e.target.value)} placeholder="transparent / #hex" />
            </div>
        </div>
    );
};

const ToggleGroup = ({ options, value, onChange }: { options: any[], value: any, onChange: (val: any) => void }) => (
    <div className="flex bg-[#1a1a1a] p-0.5 rounded-sm border border-white/5 w-full">
        {options.map(opt => (
            <button 
                key={opt.value} 
                onClick={() => onChange(opt.value)}
                className={`flex-1 flex items-center justify-center py-1 rounded-sm transition-all ${value === opt.value ? 'bg-[#333] text-white shadow-sm' : 'text-[#666] hover:text-[#999]'}`}
                title={opt.label}
            >
                {opt.icon || <span className="text-[10px] uppercase font-bold">{opt.label}</span>}
            </button>
        ))}
    </div>
);

const SelectInput = ({ value, options, onChange }: { value: any, options: any[], onChange: (val: string) => void }) => (
    <div className="relative w-full">
        <select 
            value={value} 
            onChange={(e) => onChange(e.target.value)}
            className="w-full bg-[#1a1a1a] border border-white/10 text-[#eee] text-[11px] py-1 px-2 rounded-sm outline-none appearance-none cursor-pointer"
        >
            {options.map(opt => <option key={opt.value} value={opt.value}>{opt.label}</option>)}
        </select>
        <ChevronDown size={10} className="absolute right-2 top-1/2 -translate-y-1/2 text-[#666] pointer-events-none" />
    </div>
);

// --- MAIN APPLICATION ---

export default function App() {
  const [currentView, setCurrentView] = useState('dashboard');
  // --- PAGES & FOLDERS ENGINE STATE ---
  const [pages, setPages] = useState<PageItem[]>(() => {
    try {
      const saved = localStorage.getItem('siteflow_pages');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
    } catch (e) {
      console.error(e);
    }
    return INITIAL_PAGES;
  });

  const [folders, setFolders] = useState<PageFolder[]>(() => {
    try {
      const saved = localStorage.getItem('siteflow_folders');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) return parsed;
      }
    } catch (e) {
      console.error(e);
    }
    return INITIAL_FOLDERS;
  });

  const [activePageId, setActivePageId] = useState('home');
  const [pageSearchQuery, setPageSearchQuery] = useState<string>('');
  const [expandedFolders, setExpandedFolders] = useState<Set<string>>(new Set(['folder-company', 'folder-legal']));

  // Modals & Drawers State
  const [isCreatePageOpen, setIsCreatePageOpen] = useState<boolean>(false);
  const [isCreateFolderOpen, setIsCreateFolderOpen] = useState<boolean>(false);
  const [editingPageSettings, setEditingPageSettings] = useState<PageItem | null>(null);

  // Form State: Create Page Modal
  const [newPageName, setNewPageName] = useState<string>('');
  const [newPageSlug, setNewPageSlug] = useState<string>('');
  const [newPageCategory, setNewPageCategory] = useState<'pages' | 'cms' | 'utility' | 'templates' | 'ecommerce' | 'user'>('pages');
  const [newPageFolderId, setNewPageFolderId] = useState<string>('');
  const [newPagePreset, setNewPagePreset] = useState<string>('landing');
  const [newPageSeoTitle, setNewPageSeoTitle] = useState<string>('');
  const [newPageSeoDesc, setNewPageSeoDesc] = useState<string>('');

  // Form State: Create Folder Modal
  const [newFolderName, setNewFolderName] = useState<string>('');
  const [newFolderCategory, setNewFolderCategory] = useState<'pages' | 'cms' | 'utility' | 'templates' | 'ecommerce' | 'user'>('pages');

  // Form State: Page Settings Modal
  const [settingsName, setSettingsName] = useState<string>('');
  const [settingsSlug, setSettingsSlug] = useState<string>('');
  const [settingsCategory, setSettingsCategory] = useState<'pages' | 'cms' | 'utility' | 'templates' | 'ecommerce' | 'user'>('pages');
  const [settingsFolderId, setSettingsFolderId] = useState<string>('');
  const [settingsIsHome, setSettingsIsHome] = useState<boolean>(false);
  const [settingsIsDraft, setSettingsIsDraft] = useState<boolean>(false);
  const [settingsSeoTitle, setSettingsSeoTitle] = useState<string>('');
  const [settingsSeoDesc, setSettingsSeoDesc] = useState<string>('');
  const [settingsPassword, setSettingsPassword] = useState<string>('');
  const [settingsActiveTab, setSettingsActiveTab] = useState<'general' | 'seo' | 'access'>('general');

  // Delete Confirmation Modal States
  const [pageToDelete, setPageToDelete] = useState<{ id: string; name: string } | null>(null);
  const [folderToDelete, setFolderToDelete] = useState<{ id: string; name: string } | null>(null);

  useEffect(() => {
    try {
      localStorage.setItem('siteflow_pages', JSON.stringify(pages));
    } catch (e) {
      console.error(e);
    }
  }, [pages]);

  useEffect(() => {
    try {
      localStorage.setItem('siteflow_folders', JSON.stringify(folders));
    } catch (e) {
      console.error(e);
    }
  }, [folders]);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [draggedNodeId, setDraggedNodeId] = useState<string | null>(null);
  const [dropTarget, setDropTarget] = useState<{ id: string; position: 'before' | 'after' | 'inside' } | null>(null);
  const [activeLeftPanel, setActiveLeftPanel] = useState<string | null>(null);
  const [isLeftPanelCollapsed, setIsLeftPanelCollapsed] = useState<boolean>(false);
  const [isRightPanelCollapsed, setIsRightPanelCollapsed] = useState<boolean>(false);

  // Auto-collapse left and right 320px columns when browser window is adjusted or on smaller viewports
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1280) {
        setIsLeftPanelCollapsed(true);
        setIsRightPanelCollapsed(true);
      }
    };
    window.addEventListener('resize', handleResize);
    if (window.innerWidth < 1280) {
      setIsLeftPanelCollapsed(true);
      setIsRightPanelCollapsed(true);
    }
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const [imageSearchQuery, setImageSearchQuery] = useState<string>('');
  const [activeImageCategory, setActiveImageCategory] = useState<string>('all');
  const [viewMode, setViewMode] = useState<'desktop' | 'tablet' | 'mobile-landscape' | 'mobile-portrait'>('desktop');
  const [canvasWidth, setCanvasWidth] = useState<number>(1200);
  const [isPreviewMode, setIsPreviewMode] = useState<boolean>(false);
  const [showGrid, setShowGrid] = useState<boolean>(() => {
    try {
      const saved = localStorage.getItem('siteflow_show_grid');
      return saved !== null ? JSON.parse(saved) : true;
    } catch (e) {
      return true;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('siteflow_show_grid', JSON.stringify(showGrid));
    } catch (e) {
      console.error(e);
    }
  }, [showGrid]);

  const handleSetViewMode = (mode: 'desktop' | 'tablet' | 'mobile-landscape' | 'mobile-portrait') => {
    setViewMode(mode);
    if (mode === 'desktop') setCanvasWidth(1200);
    else if (mode === 'tablet') setCanvasWidth(768);
    else if (mode === 'mobile-landscape') setCanvasWidth(568);
    else if (mode === 'mobile-portrait') setCanvasWidth(375);

    // Auto-collapse sidebars if space is tight when changing view mode
    if (window.innerWidth < 1440) {
      setIsLeftPanelCollapsed(true);
      setIsRightPanelCollapsed(true);
    }
  };

  const handleSliderWidthChange = (width: number) => {
    setCanvasWidth(width);
    if (width >= 992) setViewMode('desktop');
    else if (width >= 640) setViewMode('tablet');
    else if (width >= 480) setViewMode('mobile-landscape');
    else setViewMode('mobile-portrait');

    // Auto-collapse sidebars when adjusting viewport width in middle
    if (window.innerWidth < 1440) {
      setIsLeftPanelCollapsed(true);
      setIsRightPanelCollapsed(true);
    }
  };
  const [isLayoutPopupOpen, setIsLayoutPopupOpen] = useState(false);
  const [insertIndex, setInsertIndex] = useState<number | null>(null);
  const [activeLayoutCategory, setActiveLayoutCategory] = useState('Navigation');
  const [activeRightTab, setActiveRightTab] = useState('style');
  
  // Floating Toolbar State
  const [floatingToolbar, setFloatingToolbar] = useState<{x: number, y: number, id: string} | null>(null);
  
  // Collapse States
  const [collapsedLibrary, setCollapsedLibrary] = useState<{[key: string]: boolean}>({});
  const [collapsedNavigator, setCollapsedNavigator] = useState<Set<any>>(new Set());
  
  // Context Menu State for Navigator
  const [contextMenu, setContextMenu] = useState<{x: number, y: number, node: any} | null>(null);

  // --- GLOBAL SWATCHES STATE ---
  const [swatches, setSwatches] = useState<GlobalSwatch[]>(() => {
    try {
      const saved = localStorage.getItem('siteflow_swatches');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
    } catch (e) {
      console.error(e);
    }
    return INITIAL_GLOBAL_SWATCHES;
  });

  const [swatchCategoryFilter, setSwatchCategoryFilter] = useState<string>('All');
  const [swatchViewMode, setSwatchViewMode] = useState<'grid' | 'list'>('grid');
  
  // Swatch Creator Inline State
  const [isAddingSwatch, setIsAddingSwatch] = useState<boolean>(false);
  const [newSwatchName, setNewSwatchName] = useState<string>('');
  const [newSwatchColor, setNewSwatchColor] = useState<string>('#2b2b2b');
  const [newSwatchCategory, setNewSwatchCategory] = useState<'Brand' | 'Neutral' | 'Accent' | 'Custom'>('Custom');

  // Swatch Edit Modal State
  const [editingSwatch, setEditingSwatch] = useState<GlobalSwatch | null>(null);
  const [editSwatchName, setEditSwatchName] = useState<string>('');
  const [editSwatchColor, setEditSwatchColor] = useState<string>('');
  const [editSwatchCategory, setEditSwatchCategory] = useState<'Brand' | 'Neutral' | 'Accent' | 'Custom'>('Brand');
  const [updateMatchingBackgrounds, setUpdateMatchingBackgrounds] = useState<boolean>(true);

  // Modal Dialogs
  const [isPresetModalOpen, setIsPresetModalOpen] = useState<boolean>(false);
  const [isCssExportOpen, setIsCssExportOpen] = useState<boolean>(false);

  // Transient Toast
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  useEffect(() => {
    try {
      localStorage.setItem('siteflow_swatches', JSON.stringify(swatches));
    } catch (e) {
      console.error(e);
    }
  }, [swatches]);

  const triggerToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2800);
  };

  // --- STATE HISTORY MECHANISM (UNDO / REDO) ---
  const [historyPast, setHistoryPast] = useState<{ pages: PageItem[]; swatches: GlobalSwatch[] }[]>([]);
  const [historyFuture, setHistoryFuture] = useState<{ pages: PageItem[]; swatches: GlobalSwatch[] }[]>([]);

  const pagesRef = useRef(pages);
  pagesRef.current = pages;

  const swatchesRef = useRef(swatches);
  swatchesRef.current = swatches;

  const historyPastRef = useRef(historyPast);
  historyPastRef.current = historyPast;

  const historyFutureRef = useRef(historyFuture);
  historyFutureRef.current = historyFuture;

  const recordHistory = () => {
    try {
      const currentSnapshot = {
        pages: JSON.parse(JSON.stringify(pagesRef.current)),
        swatches: JSON.parse(JSON.stringify(swatchesRef.current))
      };
      setHistoryPast(prev => [...prev.slice(-49), currentSnapshot]);
      setHistoryFuture([]);
    } catch (e) {
      console.error('Failed to record history snapshot:', e);
    }
  };

  const handleUndo = () => {
    const past = historyPastRef.current;
    if (past.length === 0) return;

    const previousSnapshot = past[past.length - 1];
    const newPast = past.slice(0, past.length - 1);
    const currentSnapshot = {
      pages: JSON.parse(JSON.stringify(pagesRef.current)),
      swatches: JSON.parse(JSON.stringify(swatchesRef.current))
    };

    setHistoryFuture(prev => [currentSnapshot, ...prev]);
    setHistoryPast(newPast);
    setPages(previousSnapshot.pages);
    setSwatches(previousSnapshot.swatches);
    triggerToast('Undo: Reverted last change');
  };

  const handleRedo = () => {
    const future = historyFutureRef.current;
    if (future.length === 0) return;

    const nextSnapshot = future[0];
    const newFuture = future.slice(1);
    const currentSnapshot = {
      pages: JSON.parse(JSON.stringify(pagesRef.current)),
      swatches: JSON.parse(JSON.stringify(swatchesRef.current))
    };

    setHistoryPast(prev => [...prev.slice(-49), currentSnapshot]);
    setHistoryFuture(newFuture);
    setPages(nextSnapshot.pages);
    setSwatches(nextSnapshot.swatches);
    triggerToast('Redo: Re-applied change');
  };

  // Keyboard shortcuts for Undo (Ctrl+Z / Cmd+Z) and Redo (Ctrl+Y / Cmd+Shift+Z)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null;
      if (target && (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.isContentEditable)) {
        return;
      }

      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'z') {
        if (e.shiftKey) {
          e.preventDefault();
          handleRedo();
        } else {
          e.preventDefault();
          handleUndo();
        }
      } else if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'y') {
        e.preventDefault();
        handleRedo();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const toggleLibrary = (key: string) => setCollapsedLibrary(prev => ({ ...prev, [key]: !prev[key] }));
  const toggleNavigator = (id: any) => setCollapsedNavigator(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id); else next.add(id);
      return next;
  });

  const handleExpandAll = (node: any) => {
      const ids = getAllDescendantIds(node);
      setCollapsedNavigator(prev => {
          const next = new Set(prev);
          ids.forEach(id => next.delete(id));
          return next;
      });
      setContextMenu(null);
  };

  const handleCollapseAll = (node: any) => {
      const ids = getAllDescendantIds(node);
      setCollapsedNavigator(prev => {
          const next = new Set(prev);
          ids.forEach(id => next.add(id));
          return next;
      });
      setContextMenu(null);
  };

  // Pages panel state
  const [pagesState, setPagesState] = useState({
      pages: true, cms: true, utility: true, templates: false, ecommerce: true, user: true
  });
  const togglePagesState = (key: keyof typeof pagesState) => setPagesState(prev => ({...prev, [key]: !prev[key]}));

  const toggleFolder = (folderId: string) => {
    setExpandedFolders(prev => {
      const next = new Set(prev);
      if (next.has(folderId)) next.delete(folderId); else next.add(folderId);
      return next;
    });
  };

  const openCreatePageModal = (category?: 'pages' | 'cms' | 'utility' | 'templates' | 'ecommerce' | 'user', folderId?: string) => {
    setNewPageName('');
    setNewPageSlug('');
    setNewPageCategory(category || 'pages');
    setNewPageFolderId(folderId || '');
    setNewPagePreset('landing');
    setNewPageSeoTitle('');
    setNewPageSeoDesc('');
    setIsCreatePageOpen(true);
  };

  const openCreateFolderModal = (category?: 'pages' | 'cms' | 'utility' | 'templates' | 'ecommerce' | 'user') => {
    setNewFolderName('');
    setNewFolderCategory(category || 'pages');
    setIsCreateFolderOpen(true);
  };

  const handleCreatePage = () => {
    if (!newPageName.trim()) return;
    recordHistory();
    
    let cleanSlug = newPageSlug.trim();
    if (!cleanSlug) {
      cleanSlug = '/' + newPageName.trim().toLowerCase().replace(/[^a-z0-9]+/g, '-');
    } else if (!cleanSlug.startsWith('/') && !cleanSlug.startsWith('{')) {
      cleanSlug = '/' + cleanSlug;
    }

    const createdSections = generatePageSections(newPagePreset, newPageName.trim());
    const newPage: PageItem = {
      id: `page-${Date.now()}`,
      name: newPageName.trim(),
      slug: cleanSlug,
      category: newPageCategory,
      folderId: newPageFolderId || null,
      isHome: false,
      isDraft: false,
      seoTitle: newPageSeoTitle.trim() || `${newPageName.trim()} | Siteflow`,
      seoDescription: newPageSeoDesc.trim(),
      sections: createdSections
    };

    setPages(prev => [...prev, newPage]);
    setActivePageId(newPage.id);
    setIsCreatePageOpen(false);
    setNewPageName('');
    setNewPageSlug('');
    setNewPageSeoTitle('');
    setNewPageSeoDesc('');
    triggerToast(`Created page "${newPage.name}" (${newPage.slug})`);
  };

  const handleCreateFolder = () => {
    if (!newFolderName.trim()) return;
    const newFolder: PageFolder = {
      id: `folder-${Date.now()}`,
      name: newFolderName.trim(),
      category: newFolderCategory
    };
    setFolders(prev => [...prev, newFolder]);
    setNewFolderName('');
    setIsCreateFolderOpen(false);
    triggerToast(`Created folder "${newFolder.name}"`);
  };

  const openPageSettings = (page: PageItem, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setEditingPageSettings(page);
    setSettingsName(page.name);
    setSettingsSlug(page.slug);
    setSettingsCategory(page.category);
    setSettingsFolderId(page.folderId || '');
    setSettingsIsHome(!!page.isHome);
    setSettingsIsDraft(!!page.isDraft);
    setSettingsSeoTitle(page.seoTitle || '');
    setSettingsSeoDesc(page.seoDescription || '');
    setSettingsPassword(page.password || '');
    setSettingsActiveTab('general');
  };

  const handleSavePageSettings = () => {
    if (!editingPageSettings || !settingsName.trim()) return;
    recordHistory();

    let cleanSlug = settingsSlug.trim();
    if (!cleanSlug.startsWith('/') && !cleanSlug.startsWith('{')) {
      cleanSlug = '/' + cleanSlug;
    }

    setPages(prev => prev.map(p => {
      if (p.id === editingPageSettings.id) {
        return {
          ...p,
          name: settingsName.trim(),
          slug: cleanSlug,
          category: settingsCategory,
          folderId: settingsFolderId || null,
          isHome: settingsIsHome,
          isDraft: settingsIsDraft,
          seoTitle: settingsSeoTitle.trim(),
          seoDescription: settingsSeoDesc.trim(),
          password: settingsPassword.trim()
        };
      }
      if (settingsIsHome && p.id !== editingPageSettings.id) {
        return { ...p, isHome: false };
      }
      return p;
    }));

    triggerToast(`Saved settings for "${settingsName.trim()}"`);
    setEditingPageSettings(null);
  };

  const handleDuplicatePage = (page: PageItem, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    recordHistory();
    const newId = `page-${Date.now()}`;
    const newSlug = page.slug === '/' ? '/home-copy' : `${page.slug}-copy`;
    const newPage: PageItem = {
      ...page,
      id: newId,
      name: `${page.name} Copy`,
      slug: newSlug,
      isHome: false,
      sections: JSON.parse(JSON.stringify(page.sections))
    };
    setPages(prev => [...prev, newPage]);
    setActivePageId(newId);
    triggerToast(`Duplicated "${page.name}"`);
  };

  const handleDeletePage = (pageId: string, pageName: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    const targetPage = pages.find(p => p.id === pageId);
    if (targetPage?.isHome) {
      triggerToast('Cannot delete Homepage. Set another page as homepage first.');
      return;
    }
    setPageToDelete({ id: pageId, name: pageName });
  };

  const confirmDeletePage = () => {
    if (!pageToDelete) return;
    recordHistory();
    const { id: pageId, name: pageName } = pageToDelete;
    setPages(prev => prev.filter(p => p.id !== pageId));
    if (activePageId === pageId) {
      setActivePageId('home');
    }
    triggerToast(`Deleted page "${pageName}"`);
    if (editingPageSettings?.id === pageId) {
      setEditingPageSettings(null);
    }
    setPageToDelete(null);
  };

  const handleDeleteFolder = (folderId: string, folderName: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setFolderToDelete({ id: folderId, name: folderName });
  };

  const confirmDeleteFolder = () => {
    if (!folderToDelete) return;
    recordHistory();
    const { id: folderId, name: folderName } = folderToDelete;
    setFolders(prev => prev.filter(f => f.id !== folderId));
    setPages(prev => prev.map(p => p.folderId === folderId ? { ...p, folderId: null } : p));
    triggerToast(`Deleted folder "${folderName}"`);
    setFolderToDelete(null);
  };

  const [expandedSections, setExpandedSections] = useState({
      layout: true, spacing: true, size: true, position: false, 
      typography: true, backgrounds: true, borders: false, effects: false,
      layoutPresets: true
  });

  const toggleSection = (sec: keyof typeof expandedSections) => setExpandedSections(prev => ({ ...prev, [sec]: !prev[sec] }));

  const activePage = pages.find(p => p.id === activePageId) || pages[0];

  const renderPageRow = (page: PageItem) => {
    const isActive = activePageId === page.id;
    return (
      <div 
        key={page.id}
        onClick={() => setActivePageId(page.id)}
        className={`flex items-center justify-between px-2.5 py-1.5 rounded-sm cursor-pointer group/item transition-all ${isActive ? 'bg-[#3b3b3b] border border-indigo-500/50 text-white shadow-sm' : 'hover:bg-white/5 border border-transparent text-[#ccc]'}`}
      >
        <div className="flex items-center gap-2 truncate min-w-0 flex-1">
          {page.isHome ? (
            <Home size={12} className="text-indigo-400 shrink-0" />
          ) : page.password ? (
            <Lock size={12} className="text-amber-400 shrink-0" />
          ) : page.slug.includes('{') ? (
            <FileCode size={12} className="text-amber-400 shrink-0" />
          ) : (
            <FileText size={12} className="text-[#888] group-hover/item:text-white shrink-0" />
          )}

          <div className="truncate flex items-center gap-1.5">
            <span className={`text-[11px] font-medium truncate ${isActive ? 'text-white font-bold' : 'text-[#ddd]'}`}>{page.name}</span>
            <span className="text-[9px] font-mono text-[#777] bg-black/30 px-1 py-0.2 rounded-xs truncate">{page.slug}</span>
          </div>

          {page.isHome && (
            <span className="text-[8px] uppercase tracking-wider bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 px-1 py-0.2 rounded-xs font-bold shrink-0">Home</span>
          )}
          {page.isDraft && (
            <span className="text-[8px] uppercase tracking-wider bg-amber-500/20 text-amber-300 border border-amber-500/30 px-1 py-0.2 rounded-xs font-bold shrink-0">Draft</span>
          )}
        </div>

        <div className="flex items-center gap-1 opacity-0 group-hover/item:opacity-100 transition-opacity shrink-0 ml-1">
          <button 
            onClick={(e) => handleDuplicatePage(page, e)}
            className="p-1 hover:bg-white/10 rounded-xs text-[#aaa] hover:text-white transition-colors"
            title="Duplicate Page"
          >
            <Copy size={11} />
          </button>
          <button 
            onClick={(e) => openPageSettings(page, e)}
            className="p-1 hover:bg-white/10 rounded-xs text-[#aaa] hover:text-white transition-colors"
            title="Page Settings"
          >
            <Settings size={11} />
          </button>
          {!page.isHome && (
            <button 
              onClick={(e) => handleDeletePage(page.id, page.name, e)}
              className="p-1 hover:bg-red-500/20 rounded-xs text-[#aaa] hover:text-red-400 transition-colors"
              title="Delete Page"
            >
              <Trash2 size={11} />
            </button>
          )}
        </div>
      </div>
    );
  };

  const findNode = (nodes: any[], targetId: string): any => {
    for (const node of nodes) {
      if (node.instanceId === targetId) return node;
      if (node.children) {
        const found = findNode(node.children, targetId);
        if (found) return found;
      }
    }
    return null;
  };

  const handleNodeSelect = (id: string, rect?: DOMRect) => {
      setSelectedId(id);
      setActiveRightTab('style');
      if (rect) {
          setFloatingToolbar({
              x: rect.left,
              y: Math.max(60, rect.top - 40),
              id: id
          });
      } else {
          setFloatingToolbar(null);
      }
  };

  const updateNode = (id: string, updates: any) => {
    recordHistory();
    const mapNodes = (nodes: any[]): any[] => nodes.map(n => {
      if (n.instanceId === id) return { ...n, ...updates };
      return { ...n, children: mapNodes(n.children || []) };
    });
    setPages(pages.map(p => p.id === activePageId ? { ...p, sections: mapNodes(p.sections) } : p));
  };

  const handleSwapSectionPreset = (targetNodeId: string, presetId: string) => {
    const preset = SECTION_PRESETS.find(p => p.id === presetId);
    if (!preset) return;
    recordHistory();

    const baseTs = Date.now();
    const newChildren = preset.generateChildren(baseTs);

    const swapInTree = (nodes: any[]): any[] => nodes.map(n => {
      if (n.instanceId === targetNodeId) {
        return {
          ...n,
          name: preset.name,
          isContainer: true,
          styles: { ...n.styles, ...preset.styles },
          children: newChildren
        };
      }
      if (n.children && n.children.length > 0) {
        return { ...n, children: swapInTree(n.children) };
      }
      return n;
    });

    setPages(prevPages => prevPages.map(p => p.id === activePageId ? { ...p, sections: swapInTree(p.sections) } : p));
    triggerToast(`Swapped section layout structure to "${preset.name}"`);
  };

  const addElement = (template: any) => {
    recordHistory();
    let generatedChildren: any[] = [];
    if (template.presetId) {
      const preset = SECTION_PRESETS.find(p => p.id === template.presetId);
      if (preset) {
        generatedChildren = preset.generateChildren(Date.now());
      }
    }

    const newNode = { 
      ...template, 
      instanceId: Date.now(), 
      children: generatedChildren.length > 0 ? generatedChildren : [], 
      styles: { ...template.styles }, 
      content: template.content ? { ...template.content } : {} 
    };

    if (selectedId) {
      const activeNode = findNode(activePage.sections, selectedId);
      if (activeNode && activeNode.isContainer) {
        const nest = (nodes: any[]): any[] => nodes.map(n => n.instanceId === selectedId ? { ...n, children: [...(n.children || []), newNode] } : { ...n, children: nest(n.children || []) });
        setPages(pages.map(p => p.id === activePageId ? { ...p, sections: nest(p.sections) } : p));
      } else {
        setPages(pages.map(p => p.id === activePageId ? { ...p, sections: [...p.sections, newNode] } : p));
      }
    } else {
      setPages(pages.map(p => p.id === activePageId ? { ...p, sections: [...p.sections, newNode] } : p));
    }
    setSelectedId(newNode.instanceId);
  };

  const insertLayout = (layoutTemplate: any) => {
    recordHistory();
    const assignIds = (nodes: any[]): any[] => nodes.map(n => ({
      ...n, instanceId: Math.random() + Date.now(),
      children: n.children ? assignIds(n.children) : []
    }));

    const freshSections = assignIds(layoutTemplate.sections);

    const isFooter = activeLayoutCategory === 'Footer' || 
      layoutTemplate.id?.toLowerCase().includes('footer') || 
      layoutTemplate.name?.toLowerCase().includes('footer');

    if (isFooter) {
      freshSections.forEach(sec => {
        sec.styles = { ...sec.styles, marginTop: 'auto' };
      });
    }

    setPages(pages.map(p => {
      if (p.id !== activePageId) return p;
      const currentSections = [...p.sections];

      if (typeof insertIndex === 'number' && insertIndex >= 0 && insertIndex <= currentSections.length) {
        currentSections.splice(insertIndex, 0, ...freshSections);
      } else if (activeLayoutCategory === 'Navigation' && currentSections.length > 0) {
        currentSections.unshift(...freshSections);
      } else {
        currentSections.push(...freshSections);
      }

      return { ...p, sections: currentSections };
    }));

    setInsertIndex(null);
    setIsLayoutPopupOpen(false);
    triggerToast(`Added ${layoutTemplate.name || 'Layout'} to page`);
  };

  const deleteNode = (id: string) => {
    recordHistory();
    const filterNodes = (nodes: any[]): any[] => nodes.filter(n => n.instanceId !== id).map(n => ({ ...n, children: filterNodes(n.children || []) }));
    setPages(pages.map(p => p.id === activePageId ? { ...p, sections: filterNodes(p.sections) } : p));
    setSelectedId(null);
    setFloatingToolbar(null);
  };

  const handleReorderNode = (sourceId: string, targetId: string, position: 'before' | 'after' | 'inside') => {
    if (!sourceId || !targetId || sourceId === targetId) return;

    const isAncestor = (parent: any, id: string): boolean => {
      if (!parent.children || parent.children.length === 0) return false;
      for (const child of parent.children) {
        if (child.instanceId === id) return true;
        if (isAncestor(child, id)) return true;
      }
      return false;
    };

    const sourceNode = findNode(activePage.sections, sourceId);
    const targetNode = findNode(activePage.sections, targetId);
    if (!sourceNode || !targetNode) return;
    if (isAncestor(sourceNode, targetId)) return;

    const removeSource = (list: any[]): any[] => {
      return list
        .filter(n => n.instanceId !== sourceId)
        .map(n => ({
          ...n,
          children: n.children ? removeSource(n.children) : []
        }));
    };

    const cleanedTree = removeSource(activePage.sections);

    const insertInTree = (list: any[]): any[] => {
      const targetIdx = list.findIndex(n => n.instanceId === targetId);
      if (targetIdx !== -1) {
        if (position === 'inside') {
          return list.map(n => {
            if (n.instanceId === targetId) {
              return { ...n, children: [...(n.children || []), sourceNode] };
            }
            return n;
          });
        } else if (position === 'before') {
          const newList = [...list];
          newList.splice(targetIdx, 0, sourceNode);
          return newList;
        } else {
          const newList = [...list];
          newList.splice(targetIdx + 1, 0, sourceNode);
          return newList;
        }
      }

      return list.map(n => ({
        ...n,
        children: n.children ? insertInTree(n.children) : []
      }));
    };

    recordHistory();
    const updatedSections = insertInTree(cleanedTree);
    setPages(prevPages => prevPages.map(p => p.id === activePageId ? { ...p, sections: updatedSections } : p));
    triggerToast(`Reordered "${sourceNode.name}"`);
  };

  const handleMoveNodeDirection = (id: string, direction: 'up' | 'down') => {
    const moveInList = (list: any[]): { newList: any[]; moved: boolean } => {
      const idx = list.findIndex(n => n.instanceId === id);
      if (idx !== -1) {
        const targetIdx = direction === 'up' ? idx - 1 : idx + 1;
        if (targetIdx < 0 || targetIdx >= list.length) return { newList: list, moved: false };
        const newList = [...list];
        const [item] = newList.splice(idx, 1);
        newList.splice(targetIdx, 0, item);
        return { newList, moved: true };
      }
      let movedAny = false;
      const newList = list.map(n => {
        if (n.children && n.children.length > 0) {
          const res = moveInList(n.children);
          if (res.moved) {
            movedAny = true;
            return { ...n, children: res.newList };
          }
        }
        return n;
      });
      return { newList, moved: movedAny };
    };

    const { newList, moved } = moveInList(activePage.sections);
    if (moved) {
      recordHistory();
      setPages(prevPages => prevPages.map(p => p.id === activePageId ? { ...p, sections: newList } : p));
      const target = findNode(activePage.sections, id);
      if (target) triggerToast(`Moved "${target.name}" ${direction}`);
    }
  };

  // --- SWATCH CRUD HANDLERS ---
  const handleAddSwatch = () => {
    if (!newSwatchName.trim()) return;
    recordHistory();
    const newSwatch: GlobalSwatch = {
      id: `swatch-${Date.now()}`,
      name: newSwatchName.trim(),
      color: newSwatchColor.trim(),
      category: newSwatchCategory
    };
    setSwatches(prev => [...prev, newSwatch]);
    setIsAddingSwatch(false);
    triggerToast(`Added global swatch "${newSwatch.name}" (${newSwatch.color})`);
  };

  const handleUpdateSwatch = () => {
    if (!editingSwatch || !editSwatchName.trim()) return;
    recordHistory();
    const oldColor = editingSwatch.color;
    const newColor = editSwatchColor.trim();

    setSwatches(prev => prev.map(s => s.id === editingSwatch.id ? {
      ...s,
      name: editSwatchName.trim(),
      color: newColor,
      category: editSwatchCategory
    } : s));

    if (updateMatchingBackgrounds && oldColor.toLowerCase() !== newColor.toLowerCase()) {
      const updateNodes = (nodes: any[]): any[] => nodes.map(n => ({
        ...n,
        styles: {
          ...n.styles,
          backgroundColor: n.styles?.backgroundColor?.toLowerCase() === oldColor.toLowerCase() ? newColor : n.styles?.backgroundColor
        },
        children: n.children ? updateNodes(n.children) : []
      }));

      setPages(prevPages => prevPages.map(page => ({
        ...page,
        sections: updateNodes(page.sections)
      })));

      triggerToast(`Updated swatch "${editSwatchName}" & synced matching background colors`);
    } else {
      triggerToast(`Updated swatch "${editSwatchName}"`);
    }

    setEditingSwatch(null);
  };

  const handleDeleteSwatch = (id: string) => {
    const target = swatches.find(s => s.id === id);
    if (target) {
      recordHistory();
      setSwatches(prev => prev.filter(s => s.id !== id));
      triggerToast(`Deleted swatch "${target.name}"`);
    }
  };

  const handleResetSwatches = () => {
    recordHistory();
    setSwatches(INITIAL_GLOBAL_SWATCHES);
    triggerToast('Global swatches reset to studio defaults');
  };

  const handleLoadPreset = (preset: typeof PALETTE_PRESETS[0], mode: 'replace' | 'append') => {
    recordHistory();
    if (mode === 'replace') {
      setSwatches(preset.swatches as GlobalSwatch[]);
      triggerToast(`Replaced swatches with "${preset.name}" palette`);
    } else {
      const existingColors = new Set(swatches.map(s => s.color.toLowerCase()));
      const toAdd = preset.swatches.filter(s => !existingColors.has(s.color.toLowerCase()));
      setSwatches(prev => [...prev, ...(toAdd as GlobalSwatch[])]);
      triggerToast(`Appended ${toAdd.length} swatches from "${preset.name}"`);
    }
    setIsPresetModalOpen(false);
  };

  const generateCssVariables = () => {
    return `:root {\n` + 
      swatches.map(s => {
        const varName = `--color-${s.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;
        return `  ${varName}: ${s.color}; /* ${s.category} */`;
      }).join('\n') +
      `\n}`;
  };

  const filteredSwatches = swatches.filter(s => {
    if (swatchCategoryFilter === 'All') return true;
    return s.category === swatchCategoryFilter;
  });

  const renderInspector = () => {
    const node = selectedId ? findNode(activePage.sections, selectedId) : null;
    const getStyle = (key: string, fallback = '') => node?.styles?.[key] || fallback;
    const setStyle = (key: string, val: string) => updateNode(selectedId!, { styles: { ...node.styles, [key]: val } });

    if (!node) return (
      <div className="p-4 custom-scrollbar h-full overflow-y-auto bg-[#2b2b2b] space-y-4">
        <div className="p-4 text-center border-b border-white/5 opacity-80">
          <MousePointer2 size={28} className="mx-auto mb-2 text-indigo-400" />
          <h4 className="text-[11px] font-bold tracking-wider uppercase text-white">Select Element</h4>
          <p className="text-[10px] text-[#888] mt-1 leading-normal">Click any canvas element or Navigator node to inspect styling, or pick a preset below to add a section.</p>
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between text-[11px] font-bold text-white border-b border-white/10 pb-1.5">
            <span>Section Presets</span>
            <span className="text-[9px] font-mono text-indigo-400 bg-indigo-500/10 px-1.5 py-0.5 rounded-xs border border-indigo-500/20">{SECTION_PRESETS.length} Layouts</span>
          </div>
          <div className="grid grid-cols-1 gap-1.5">
            {SECTION_PRESETS.map(preset => (
              <button
                key={preset.id}
                onClick={() => addElement({
                  id: `section-${preset.id}`,
                  name: preset.name,
                  isContainer: true,
                  styles: preset.styles,
                  presetId: preset.id
                })}
                className="flex items-center justify-between p-2 bg-[#1a1a1a] hover:bg-indigo-600/20 border border-white/10 hover:border-indigo-500/50 rounded-sm transition-all text-left group"
              >
                <div className="min-w-0 flex-1 pr-2">
                  <div className="text-[11px] font-bold text-white group-hover:text-indigo-300 flex items-center gap-1.5">
                    <Grid size={12} className="text-indigo-400 shrink-0" />
                    <span>{preset.name}</span>
                  </div>
                  <div className="text-[9px] text-[#888] line-clamp-1 mt-0.5">{preset.description}</div>
                </div>
                <span className="text-[9px] bg-indigo-600 text-white px-2 py-0.5 rounded-xs font-mono font-bold shrink-0">
                  + Add
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    );

    const currentBg = getStyle('backgroundColor', 'transparent');
    const matchedSwatch = swatches.find(s => s.color.toLowerCase() === currentBg.toLowerCase());

    const isTextNode = ['heading', 'paragraph', 'button', 'coffee', 'text-block', 'link-block', 'input'].includes(node.id) || 
                       (node.content && (typeof node.content.text === 'string' || typeof node.content.placeholder === 'string'));

    const currentText = node.id === 'input' 
      ? (node.content?.placeholder ?? '') 
      : (node.content?.text ?? (
          node.id === 'heading' ? 'Heading' :
          node.id === 'paragraph' ? 'Sentence case content follows technical rules.' :
          node.id === 'button' ? 'Button' :
          node.id === 'coffee' ? 'Buy me a coffee' :
          node.id === 'text-block' ? 'Text block' : ''
        ));

    const handleContentChange = (newVal: string) => {
      if (node.id === 'input') {
        updateNode(selectedId!, {
          content: {
            ...(node.content || {}),
            placeholder: newVal
          }
        });
      } else {
        updateNode(selectedId!, {
          content: {
            ...(node.content || {}),
            text: newVal
          }
        });
      }
    };

    return (
      <div className="flex flex-col animate-in fade-in duration-300 custom-scrollbar h-full overflow-y-auto bg-[#2b2b2b]">
        {/* Style Selector Header */}
        <div className="p-3 border-b border-white/5 bg-[#2b2b2b] sticky top-0 z-10">
            <div className="bg-[#1a1a1a] border border-white/10 rounded-sm p-1 flex items-center justify-between cursor-text hover:border-white/20 transition-colors group">
                <div className="flex items-center gap-2">
                    <div className="bg-indigo-600/20 text-indigo-400 text-[9px] px-1.5 py-0.5 rounded-sm border border-indigo-500/20 font-bold uppercase">{node.id}</div>
                    <span className="text-[11px] text-[#888] italic group-hover:text-[#aaa]">Select a class or tag</span>
                </div>
                <ChevronDown size={12} className="text-[#444]" />
            </div>
            <div className="flex items-center justify-between mt-3 px-1">
                <span className="text-[10px] text-[#666]">Inheriting 2 selectors</span>
                <Plus size={12} className="text-[#666] cursor-pointer hover:text-white" />
            </div>
        </div>

        {/* --- TEXT CONTENT EDITING CARD --- */}
        {isTextNode && (
          <div className="p-3 border-b border-white/5 bg-[#222]/90 font-normal">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-1.5 text-indigo-400">
                <Type size={13} />
                <span className="text-[10px] font-bold tracking-wider uppercase text-[#eee]">Text Content</span>
              </div>
              <span className="text-[9px] font-mono text-indigo-300 bg-indigo-500/10 px-1.5 py-0.5 rounded-xs border border-indigo-500/20 font-medium capitalize">
                {node.name || node.id}
              </span>
            </div>

            <div className="relative">
              {node.id === 'paragraph' ? (
                <textarea
                  value={currentText}
                  onChange={(e) => handleContentChange(e.target.value)}
                  placeholder="Enter element text content..."
                  rows={3}
                  className="w-full bg-[#111] border border-white/10 rounded-sm p-2 text-[11px] text-[#f4f4f4] focus:border-indigo-500 focus:outline-none transition-colors custom-scrollbar resize-y placeholder-[#555] font-sans leading-relaxed"
                />
              ) : (
                <input
                  type="text"
                  value={currentText}
                  onChange={(e) => handleContentChange(e.target.value)}
                  placeholder={node.id === 'input' ? "Enter placeholder text..." : "Enter element text content..."}
                  className="w-full bg-[#111] border border-white/10 rounded-sm py-1.5 px-2.5 text-[11px] text-[#f4f4f4] focus:border-indigo-500 focus:outline-none transition-colors placeholder-[#555] font-sans"
                />
              )}
            </div>
            
            <div className="flex items-center justify-between mt-1.5 text-[9px] text-[#777]">
              <span>{currentText.length} characters</span>
              {currentText && (
                <button 
                  onClick={() => handleContentChange('')} 
                  className="hover:text-red-400 transition-colors"
                >
                  Clear text
                </button>
              )}
            </div>
          </div>
        )}

        {(node.id === 'image' || Boolean(node.content?.url) || Boolean(node.styles?.backgroundImage)) && (
          <div className="p-3 bg-[#222] border-b border-white/5 space-y-3">
            <div className="flex items-center justify-between text-[11px] font-bold text-white">
              <span className="flex items-center gap-1.5"><ImageIcon size={14} className="text-indigo-400" /> Image Source</span>
              <button onClick={() => setActiveLeftPanel('images')} className="text-[10px] text-indigo-400 hover:text-indigo-300 font-bold flex items-center gap-1">
                Stock Library <ArrowRight size={10} />
              </button>
            </div>

            {node.content?.url && (
              <div className="relative aspect-video rounded-xs border border-white/10 overflow-hidden bg-[#111] group">
                <img src={node.content.url} alt="Element preview" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-2">
                  <button
                    onClick={() => setActiveLeftPanel('images')}
                    className="px-2.5 py-1.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xs text-[10px] font-bold transition-all shadow flex items-center gap-1"
                  >
                    <ImageIcon size={12} />
                    Replace from Library
                  </button>
                </div>
              </div>
            )}

            <div className="space-y-1">
              <label className="text-[10px] font-bold text-[#888] uppercase tracking-wider block">Image URL</label>
              <div className="flex gap-1.5">
                <input
                  type="text"
                  value={node.content?.url || ''}
                  onChange={(e) => {
                    recordHistory();
                    updateNode(selectedId!, { content: { ...node.content, url: e.target.value } });
                  }}
                  placeholder="https://..."
                  className="flex-1 bg-[#111] border border-white/10 rounded-xs py-1 px-2 text-[11px] text-[#f4f4f4] focus:border-indigo-500 focus:outline-none"
                />
                <button
                  onClick={() => setActiveLeftPanel('images')}
                  className="px-2 py-1 bg-indigo-600/20 hover:bg-indigo-600/40 text-indigo-300 border border-indigo-500/30 rounded-xs text-[10px] font-bold transition-colors flex items-center gap-1 shrink-0"
                  title="Open Stock Image Library"
                >
                  <ImageIcon size={12} />
                  Browse
                </button>
              </div>
            </div>

            {/* Quick stock replace thumbnails */}
            <div className="space-y-1.5 pt-1.5 border-t border-white/5">
              <div className="flex items-center justify-between text-[10px] text-[#888]">
                <span>Quick Stock Presets</span>
                <button onClick={() => setActiveLeftPanel('images')} className="text-indigo-400 hover:underline text-[9px]">View All</button>
              </div>
              <div className="grid grid-cols-3 gap-1">
                {STOCK_IMAGE_CATEGORIES.flatMap(c => c.images).slice(0, 6).map(img => (
                  <button
                    key={img.id}
                    onClick={() => {
                      recordHistory();
                      updateNode(selectedId!, { content: { ...node.content, url: img.url } });
                      triggerToast(`Replaced image with "${img.title}"`);
                    }}
                    className="relative aspect-video rounded-xs overflow-hidden border border-white/10 hover:border-indigo-500 transition-all group"
                    title={img.title}
                  >
                    <img src={img.url} alt={img.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* --- SECTION PRESETS SELECTOR --- */}
        <InspectorSection title="Section Presets & Structure" isOpen={expandedSections.layoutPresets ?? true} onToggle={() => toggleSection('layoutPresets' as any)}>
            <div className="space-y-2">
                <div className="flex items-center justify-between text-[10px] text-[#aaa]">
                    <span>Quick Swap Structure</span>
                    <span className="text-[9px] font-mono text-indigo-400 bg-indigo-500/10 px-1.5 py-0.5 rounded-xs border border-indigo-500/20 truncate max-w-[110px]">
                      {node.name || 'Selected'}
                    </span>
                </div>
                <div className="grid grid-cols-1 gap-1.5">
                    {SECTION_PRESETS.map(preset => (
                        <button
                            key={preset.id}
                            onClick={() => handleSwapSectionPreset(selectedId!, preset.id)}
                            className="flex items-center justify-between p-2 bg-[#1a1a1a] hover:bg-indigo-600/20 border border-white/10 hover:border-indigo-500/50 rounded-sm transition-all text-left group"
                            title={`Swap ${node.name || 'Selected element'} structure to ${preset.name}`}
                        >
                            <div className="min-w-0 flex-1 pr-2">
                                <div className="text-[11px] font-bold text-white group-hover:text-indigo-300 flex items-center gap-1.5">
                                    {preset.category === 'Pricing' ? (
                                      <CreditCard size={12} className="text-emerald-400 shrink-0" />
                                    ) : (
                                      <Grid size={12} className="text-indigo-400 shrink-0" />
                                    )}
                                    <span className="truncate">{preset.name}</span>
                                    <span className={`text-[8px] font-mono uppercase px-1 py-0.2 rounded-xs border font-normal shrink-0 ${
                                      preset.category === 'Pricing'
                                        ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
                                        : 'bg-white/5 text-[#888] border-white/10'
                                    }`}>
                                      {preset.category}
                                    </span>
                                </div>
                                <div className="text-[9px] text-[#888] line-clamp-1 mt-0.5">{preset.description}</div>
                            </div>
                            <span className="text-[9px] bg-white/10 text-[#aaa] group-hover:bg-indigo-600 group-hover:text-white px-2 py-0.5 rounded-xs font-mono font-bold shrink-0 transition-colors">
                                Swap
                            </span>
                        </button>
                    ))}
                </div>
            </div>
        </InspectorSection>

        {/* --- LAYOUT --- */}
        <InspectorSection title="Layout" isOpen={expandedSections.layout} onToggle={() => toggleSection('layout')}>
            <div className="mb-3">
                <div className="flex items-center justify-between mb-2"><label className="text-[10px] text-[#999]">Display</label></div>
                <ToggleGroup 
                    value={getStyle('display', 'block')}
                    onChange={(v) => setStyle('display', v)}
                    options={[
                        { value: 'block', icon: <BoxIcon size={12} strokeWidth={2}/>, label: 'Block' },
                        { value: 'flex', icon: <Layout size={12} strokeWidth={2}/>, label: 'Flex' },
                        { value: 'grid', icon: <Grid size={12} strokeWidth={2}/>, label: 'Grid' },
                        { value: 'none', icon: <EyeOff size={12} strokeWidth={2}/>, label: 'None' },
                    ]}
                />
            </div>
            {getStyle('display') === 'flex' && (
                <div className="space-y-2 mt-2 pt-2 border-t border-white/5">
                     <PropertyRow label="Direction">
                        <ToggleGroup value={getStyle('flexDirection', 'row')} onChange={(v) => setStyle('flexDirection', v)} options={[
                            { value: 'row', icon: <ArrowLeft size={10} className="rotate-180"/> },
                            { value: 'column', icon: <ArrowUp size={10} className="rotate-180"/> },
                        ]} />
                     </PropertyRow>
                     <PropertyRow label="Align">
                        <ToggleGroup value={getStyle('alignItems', 'stretch')} onChange={(v) => setStyle('alignItems', v)} options={[
                            { value: 'flex-start', icon: <AlignLeft size={10} className="-rotate-90"/> },
                            { value: 'center', icon: <AlignCenterIcon size={10} className="-rotate-90"/> },
                            { value: 'flex-end', icon: <AlignRight size={10} className="-rotate-90"/> },
                            { value: 'stretch', icon: <AlignJustify size={10} className="-rotate-90"/> },
                        ]} />
                     </PropertyRow>
                     <PropertyRow label="Justify">
                        <ToggleGroup value={getStyle('justifyContent', 'flex-start')} onChange={(v) => setStyle('justifyContent', v)} options={[
                            { value: 'flex-start', icon: <AlignLeft size={10}/> },
                            { value: 'center', icon: <AlignCenterIcon size={10}/> },
                            { value: 'flex-end', icon: <AlignRight size={10}/> },
                            { value: 'space-between', icon: <AlignJustify size={10}/> },
                        ]} />
                     </PropertyRow>
                </div>
            )}
        </InspectorSection>

         {/* --- SPACING --- */}
        <InspectorSection title="Spacing" isOpen={expandedSections.spacing} onToggle={() => toggleSection('spacing')}>
            <div className="relative p-2 bg-[#1a1a1a]/40 rounded-sm border border-white/[0.05] h-32 flex items-center justify-center">
                 <div className="w-full h-full bg-[#222] border border-white/[0.05] rounded-sm relative shadow-inner">
                    <div className="absolute top-0.5 left-2 text-[6px] text-[#555] font-bold uppercase tracking-widest">Margin</div>
                    <input className="absolute top-1 left-1/2 -translate-x-1/2 w-8 bg-transparent text-center text-[10px] text-[#888] focus:text-white outline-none hover:bg-white/5 rounded-sm" 
                        value={getStyle('marginTop', '0')} onChange={e => setStyle('marginTop', e.target.value)} placeholder="0" />
                    <input className="absolute bottom-1 left-1/2 -translate-x-1/2 w-8 bg-transparent text-center text-[10px] text-[#888] focus:text-white outline-none hover:bg-white/5 rounded-sm" 
                        value={getStyle('marginBottom', '0')} onChange={e => setStyle('marginBottom', e.target.value)} placeholder="0" />
                    <input className="absolute left-1 top-1/2 -translate-y-1/2 w-6 bg-transparent text-center text-[10px] text-[#888] focus:text-white outline-none hover:bg-white/5 rounded-sm" 
                        value={getStyle('marginLeft', '0')} onChange={e => setStyle('marginLeft', e.target.value)} placeholder="0" />
                    <input className="absolute right-1 top-1/2 -translate-y-1/2 w-6 bg-transparent text-center text-[10px] text-[#888] focus:text-white outline-none hover:bg-white/5 rounded-sm" 
                        value={getStyle('marginRight', '0')} onChange={e => setStyle('marginRight', e.target.value)} placeholder="0" />
                    
                    <div className="absolute inset-7 bg-[#2a2a2a] border border-white/[0.05] rounded-sm shadow-sm flex items-center justify-center">
                        <div className="absolute top-0.5 left-2 text-[6px] text-[#555] font-bold uppercase tracking-widest">Padding</div>
                        <input className="absolute top-0.5 left-1/2 -translate-x-1/2 w-8 bg-transparent text-center text-[10px] text-[#ccc] focus:text-white outline-none hover:bg-white/5 rounded-sm" 
                            value={getStyle('paddingTop', '0')} onChange={e => setStyle('paddingTop', e.target.value)} placeholder="0" />
                        <input className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-8 bg-transparent text-center text-[10px] text-[#ccc] focus:text-white outline-none hover:bg-white/5 rounded-sm" 
                            value={getStyle('paddingBottom', '0')} onChange={e => setStyle('paddingBottom', e.target.value)} placeholder="0" />
                        <input className="absolute left-0.5 top-1/2 -translate-y-1/2 w-6 bg-transparent text-center text-[10px] text-[#ccc] focus:text-white outline-none hover:bg-white/5 rounded-sm" 
                            value={getStyle('paddingLeft', '0')} onChange={e => setStyle('paddingLeft', e.target.value)} placeholder="0" />
                        <input className="absolute right-0.5 top-1/2 -translate-y-1/2 w-6 bg-transparent text-center text-[10px] text-[#ccc] focus:text-white outline-none hover:bg-white/5 rounded-sm" 
                            value={getStyle('paddingRight', '0')} onChange={e => setStyle('paddingRight', e.target.value)} placeholder="0" />
                        
                        <div className="w-8 h-2 bg-[#333] rounded-sm border border-white/5" />
                    </div>
                 </div>
            </div>
        </InspectorSection>

        {/* --- SIZE --- */}
        <InspectorSection title="Size" isOpen={expandedSections.size} onToggle={() => toggleSection('size')}>
            <div className="grid grid-cols-2 gap-x-2 gap-y-2">
                <PropertyRow label="Width" half>
                    <TextInput value={getStyle('width', 'auto')} onChange={v => setStyle('width', v)} className="w-full" />
                </PropertyRow>
                <PropertyRow label="Height" half>
                    <TextInput value={getStyle('height', 'auto')} onChange={v => setStyle('height', v)} className="w-full" />
                </PropertyRow>
                <PropertyRow label="Min W" half>
                    <TextInput value={getStyle('minWidth', '0')} onChange={v => setStyle('minWidth', v)} className="w-full" />
                </PropertyRow>
                <PropertyRow label="Min H" half>
                    <TextInput value={getStyle('minHeight', '0')} onChange={v => setStyle('minHeight', v)} className="w-full" />
                </PropertyRow>
                <PropertyRow label="Max W" half>
                    <TextInput value={getStyle('maxWidth', 'none')} onChange={v => setStyle('maxWidth', v)} className="w-full" />
                </PropertyRow>
                <PropertyRow label="Max H" half>
                    <TextInput value={getStyle('maxHeight', 'none')} onChange={v => setStyle('maxHeight', v)} className="w-full" />
                </PropertyRow>
            </div>
            <div className="flex items-center justify-between mt-3">
                <label className="text-[10px] text-[#999]">Overflow</label>
                <div className="w-[60%]">
                    <ToggleGroup 
                        value={getStyle('overflow', 'visible')}
                        onChange={(v) => setStyle('overflow', v)}
                        options={[
                            { value: 'visible', icon: <Eye size={12}/> },
                            { value: 'hidden', icon: <EyeOff size={12}/> },
                            { value: 'scroll', icon: <List size={12}/> },
                            { value: 'auto', icon: <Settings size={12}/> },
                        ]}
                    />
                </div>
            </div>
        </InspectorSection>

        {/* --- POSITION --- */}
        <InspectorSection title="Position" isOpen={expandedSections.position} onToggle={() => toggleSection('position')}>
             <div className="mb-2">
                <SelectInput 
                    value={getStyle('position', 'static')}
                    options={[
                        { label: 'Static', value: 'static' },
                        { label: 'Relative', value: 'relative' },
                        { label: 'Absolute', value: 'absolute' },
                        { label: 'Fixed', value: 'fixed' },
                        { label: 'Sticky', value: 'sticky' },
                    ]}
                    onChange={(v) => setStyle('position', v)}
                />
             </div>
             {getStyle('position') !== 'static' && (
                 <div className="grid grid-cols-2 gap-2 mt-2">
                     <TextInput value={getStyle('top', 'auto')} onChange={v => setStyle('top', v)} unit="TOP" />
                     <TextInput value={getStyle('bottom', 'auto')} onChange={v => setStyle('bottom', v)} unit="BTM" />
                     <TextInput value={getStyle('left', 'auto')} onChange={v => setStyle('left', v)} unit="LFT" />
                     <TextInput value={getStyle('right', 'auto')} onChange={v => setStyle('right', v)} unit="RGT" />
                     <div className="col-span-2">
                         <PropertyRow label="Z-Index">
                            <TextInput value={getStyle('zIndex', 'auto')} onChange={v => setStyle('zIndex', v)} />
                         </PropertyRow>
                     </div>
                 </div>
             )}
        </InspectorSection>

        {/* --- TYPOGRAPHY --- */}
        <InspectorSection title="Typography" isOpen={expandedSections.typography} onToggle={() => toggleSection('typography')}>
            <div className="space-y-3">
                <div className="mb-2">
                    <label className="text-[10px] text-[#999] block mb-1">Font</label>
                    <SelectInput 
                        value={getStyle('fontFamily', 'Inter')}
                        options={[
                            { label: 'Inter', value: 'Inter, sans-serif' },
                            { label: 'Arial', value: 'Arial, sans-serif' },
                            { label: 'Helvetica', value: 'Helvetica, sans-serif' },
                            { label: 'Times New Roman', value: 'Times New Roman, serif' },
                            { label: 'Courier New', value: 'Courier New, monospace' },
                            { label: 'Georgia', value: 'Georgia, serif' },
                        ]}
                        onChange={(v) => setStyle('fontFamily', v)}
                    />
                </div>
                <div className="grid grid-cols-2 gap-2">
                    <div className="col-span-1">
                        <label className="text-[10px] text-[#999] block mb-1">Weight</label>
                        <SelectInput 
                            value={getStyle('fontWeight', '400')}
                            options={[
                                { label: '100 - Thin', value: '100' },
                                { label: '300 - Light', value: '300' },
                                { label: '400 - Normal', value: '400' },
                                { label: '500 - Medium', value: '500' },
                                { label: '600 - Semi Bold', value: '600' },
                                { label: '700 - Bold', value: '700' },
                                { label: '900 - Black', value: '900' },
                            ]}
                            onChange={(v) => setStyle('fontWeight', v)}
                        />
                    </div>
                    <div className="col-span-1">
                        <label className="text-[10px] text-[#999] block mb-1">Size</label>
                        <TextInput value={getStyle('fontSize', '16px')} onChange={v => setStyle('fontSize', v)} unit="PX" />
                    </div>
                    <div className="col-span-1">
                         <label className="text-[10px] text-[#999] block mb-1">Height</label>
                         <TextInput value={getStyle('lineHeight', '1.5')} onChange={v => setStyle('lineHeight', v)} unit="-" />
                    </div>
                    <div className="col-span-1">
                         <label className="text-[10px] text-[#999] block mb-1">Color</label>
                         <ColorInput value={getStyle('color', '#000000')} onChange={v => setStyle('color', v)} />
                    </div>
                </div>
                <div>
                     <label className="text-[10px] text-[#999] block mb-1">Align</label>
                     <ToggleGroup value={getStyle('textAlign', 'left')} onChange={v => setStyle('textAlign', v)} options={[
                        { value: 'left', icon: <AlignLeft size={12}/> },
                        { value: 'center', icon: <AlignCenterIcon size={12}/> },
                        { value: 'right', icon: <AlignRight size={12}/> },
                        { value: 'justify', icon: <AlignJustify size={12}/> },
                     ]} />
                </div>
                <div>
                     <label className="text-[10px] text-[#999] block mb-1">Decoration</label>
                     <div className="flex bg-[#1a1a1a] p-0.5 rounded-sm border border-white/5 w-full">
                         {['none', 'underline', 'line-through', 'overline'].map(d => (
                             <button key={d} onClick={() => setStyle('textDecoration', d)} className={`flex-1 flex items-center justify-center py-1 rounded-sm ${getStyle('textDecoration') === d ? 'bg-[#333] text-white' : 'text-[#666]'}`}>
                                 {d === 'none' && <X size={12}/>}
                                 {d === 'underline' && <UnderlineIcon size={12}/>}
                                 {d === 'line-through' && <Strikethrough size={12}/>}
                                 {d === 'overline' && <span className="text-[10px] align-top leading-[0.5] border-t border-current">T</span>}
                             </button>
                         ))}
                     </div>
                </div>
            </div>
        </InspectorSection>

        {/* --- BACKGROUNDS (WITH GLOBAL SWATCHES) --- */}
        <InspectorSection 
          title="Backgrounds" 
          isOpen={expandedSections.backgrounds} 
          onToggle={() => toggleSection('backgrounds')} 
          onAdd={() => {
            const current = getStyle('backgroundColor', '#2b2b2b');
            setNewSwatchColor(current !== 'transparent' ? current : '#2b2b2b');
            setNewSwatchName(`Swatch ${swatches.length + 1}`);
            setIsAddingSwatch(true);
          }}
        >
          <div className="space-y-3">
             <div className="flex items-center justify-between">
                <label className="text-[10px] text-[#999] font-normal">Background Color</label>
                {matchedSwatch && (
                  <span className="text-[9px] bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 px-1.5 py-0.5 rounded-sm flex items-center gap-1 font-mono">
                    <Sparkles size={10} />
                    {matchedSwatch.name}
                  </span>
                )}
             </div>

             <div className="flex items-center gap-2">
                 <ColorInput value={getStyle('backgroundColor', 'transparent')} onChange={v => setStyle('backgroundColor', v)} />
                 <button
                    onClick={() => {
                      const currentBg = getStyle('backgroundColor', '#2b2b2b');
                      setNewSwatchColor(currentBg !== 'transparent' ? currentBg : '#2b2b2b');
                      setNewSwatchName(`Swatch ${swatches.length + 1}`);
                      setIsAddingSwatch(true);
                    }}
                    className="px-2 py-1 bg-indigo-600/80 hover:bg-indigo-600 text-white text-[10px] rounded-sm flex items-center gap-1 font-medium transition-colors shrink-0 shadow-sm"
                    title="Save current color as Global Swatch"
                 >
                    <Plus size={12} />
                    Swatch
                 </button>
             </div>

             {/* Inline Swatch Creation Form */}
             {isAddingSwatch && (
                <div className="p-3 bg-[#1e1e1e] border border-indigo-500/40 rounded-sm space-y-2.5 animate-in fade-in duration-200">
                  <div className="flex items-center justify-between border-b border-white/10 pb-1.5">
                    <span className="text-[10px] font-bold text-white uppercase tracking-wider flex items-center gap-1">
                      <Palette size={12} className="text-indigo-400" /> Save Global Swatch
                    </span>
                    <button onClick={() => setIsAddingSwatch(false)} className="text-[#888] hover:text-white">
                      <X size={12} />
                    </button>
                  </div>

                  <div>
                    <label className="text-[9px] text-[#aaa] block mb-1">Swatch Name</label>
                    <input 
                      className="w-full bg-[#111] border border-white/10 text-white text-[11px] px-2 py-1 rounded-sm outline-none focus:border-indigo-500 font-sans"
                      value={newSwatchName}
                      onChange={e => setNewSwatchName(e.target.value)}
                      placeholder="e.g. Hero Primary, Dark Surface"
                      autoFocus
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="text-[9px] text-[#aaa] block mb-1">Color Code</label>
                      <div className="flex items-center gap-1 bg-[#111] border border-white/10 px-1.5 py-1 rounded-sm">
                        <div className="w-3.5 h-3.5 rounded-sm border border-white/20 shrink-0" style={{ backgroundColor: newSwatchColor }} />
                        <input 
                          className="w-full bg-transparent text-[10px] text-white font-mono outline-none"
                          value={newSwatchColor}
                          onChange={e => setNewSwatchColor(e.target.value)}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-[9px] text-[#aaa] block mb-1">Category</label>
                      <select
                        className="w-full bg-[#111] border border-white/10 text-white text-[10px] px-1.5 py-1 rounded-sm outline-none cursor-pointer"
                        value={newSwatchCategory}
                        onChange={e => setNewSwatchCategory(e.target.value as any)}
                      >
                        <option value="Brand">Brand</option>
                        <option value="Neutral">Neutral</option>
                        <option value="Accent">Accent</option>
                        <option value="Custom">Custom</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex justify-end gap-2 pt-1">
                    <button 
                      onClick={() => setIsAddingSwatch(false)} 
                      className="px-2.5 py-1 text-[10px] text-[#aaa] hover:text-white transition-colors"
                    >
                      Cancel
                    </button>
                    <button 
                      onClick={handleAddSwatch}
                      className="px-3 py-1 bg-indigo-600 text-white text-[10px] rounded-sm font-medium hover:bg-indigo-500 transition-colors shadow-sm"
                    >
                      Save Swatch
                    </button>
                  </div>
                </div>
             )}

             {/* Global Swatches Sub-panel */}
             <div className="pt-2 border-t border-white/5 space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <Palette size={12} className="text-indigo-400" />
                    <span className="text-[10px] font-bold text-[#d1d1d1] uppercase tracking-wider">
                      Global Swatches
                    </span>
                    <span className="text-[9px] bg-white/10 text-[#aaa] px-1.5 py-0.2 rounded-full font-mono">
                      {filteredSwatches.length}
                    </span>
                  </div>

                  <div className="flex items-center gap-1">
                    <button 
                      onClick={() => setSwatchViewMode(swatchViewMode === 'grid' ? 'list' : 'grid')}
                      className="p-1 text-[#888] hover:text-white rounded-sm hover:bg-white/5 transition-colors"
                      title={swatchViewMode === 'grid' ? 'Switch to List View' : 'Switch to Grid View'}
                    >
                      {swatchViewMode === 'grid' ? <List size={12} /> : <Grid size={12} />}
                    </button>
                    <button 
                      onClick={() => setIsPresetModalOpen(true)}
                      className="p-1 text-[#888] hover:text-indigo-300 rounded-sm hover:bg-white/5 transition-colors"
                      title="Load Preset Palettes"
                    >
                      <Sparkles size={12} />
                    </button>
                    <button 
                      onClick={() => setIsCssExportOpen(true)}
                      className="p-1 text-[#888] hover:text-white rounded-sm hover:bg-white/5 transition-colors"
                      title="Export Palette as CSS Variables"
                    >
                      <Code size={12} />
                    </button>
                  </div>
                </div>

                {/* Category Pills */}
                <div className="flex items-center gap-1 overflow-x-auto pb-1 custom-scrollbar">
                  {['All', 'Brand', 'Neutral', 'Accent', 'Custom'].map(cat => (
                    <button
                      key={cat}
                      onClick={() => setSwatchCategoryFilter(cat)}
                      className={`text-[9px] px-2 py-0.5 rounded-sm whitespace-nowrap transition-colors ${
                        swatchCategoryFilter === cat 
                          ? 'bg-indigo-600 text-white font-medium' 
                          : 'bg-[#1a1a1a] text-[#888] hover:text-white hover:bg-white/10'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>

                {/* Swatch Display Grid or List */}
                {swatchViewMode === 'grid' ? (
                  <div className="grid grid-cols-5 gap-1.5 pt-1">
                    {filteredSwatches.map(s => {
                      const isSelectedBg = currentBg.toLowerCase() === s.color.toLowerCase();
                      const textColor = getContrastColor(s.color);
                      return (
                        <div 
                          key={s.id}
                          onClick={() => setStyle('backgroundColor', s.color)}
                          className={`group relative aspect-square rounded-sm border cursor-pointer transition-all flex items-center justify-center p-0.5 ${
                            isSelectedBg 
                              ? 'border-indigo-400 ring-2 ring-indigo-500/50 scale-105 z-10 shadow-lg' 
                              : 'border-white/10 hover:border-white/40 hover:scale-105'
                          }`}
                          style={{ backgroundColor: s.color }}
                          title={`${s.name} (${s.color})`}
                        >
                          {isSelectedBg && (
                            <Check size={12} className={textColor === 'white' ? 'text-white drop-shadow' : 'text-black drop-shadow'} />
                          )}

                          {/* Hover Quick Action Buttons */}
                          <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-1 rounded-sm">
                            <button 
                              onClick={(e) => {
                                e.stopPropagation();
                                setEditingSwatch(s);
                                setEditSwatchName(s.name);
                                setEditSwatchColor(s.color);
                                setEditSwatchCategory(s.category);
                              }}
                              className="p-0.5 text-white hover:text-indigo-300 transition-colors"
                              title="Edit Swatch"
                            >
                              <Settings size={10} />
                            </button>
                            <button 
                              onClick={(e) => {
                                e.stopPropagation();
                                handleDeleteSwatch(s.id);
                              }}
                              className="p-0.5 text-white hover:text-red-400 transition-colors"
                              title="Delete Swatch"
                            >
                              <Trash2 size={10} />
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  /* List View */
                  <div className="space-y-1 pt-1 max-h-48 overflow-y-auto custom-scrollbar">
                    {filteredSwatches.map(s => {
                      const isSelectedBg = currentBg.toLowerCase() === s.color.toLowerCase();
                      return (
                        <div
                          key={s.id}
                          onClick={() => setStyle('backgroundColor', s.color)}
                          className={`flex items-center justify-between p-1.5 rounded-sm border cursor-pointer transition-all ${
                            isSelectedBg 
                              ? 'bg-indigo-950/40 border-indigo-500/50' 
                              : 'bg-[#1a1a1a] border-white/5 hover:border-white/20'
                          }`}
                        >
                          <div className="flex items-center gap-2 min-w-0">
                            <div 
                              className="w-4 h-4 rounded-sm border border-white/20 shrink-0 shadow-inner" 
                              style={{ backgroundColor: s.color }} 
                            />
                            <div className="truncate">
                              <p className="text-[10px] text-white font-medium truncate leading-none">{s.name}</p>
                              <p className="text-[8px] text-[#777] font-mono leading-tight">{s.color}</p>
                            </div>
                          </div>

                          <div className="flex items-center gap-1">
                            <span className="text-[8px] text-[#666] bg-white/5 px-1 py-0.2 rounded-sm uppercase">
                              {s.category}
                            </span>
                            <button 
                              onClick={(e) => { 
                                e.stopPropagation(); 
                                setEditingSwatch(s);
                                setEditSwatchName(s.name);
                                setEditSwatchColor(s.color);
                                setEditSwatchCategory(s.category);
                              }}
                              className="p-1 text-[#666] hover:text-white transition-colors"
                            >
                              <Settings size={10} />
                            </button>
                            <button 
                              onClick={(e) => { e.stopPropagation(); handleDeleteSwatch(s.id); }}
                              className="p-1 text-[#666] hover:text-red-400 transition-colors"
                            >
                              <Trash2 size={10} />
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}

                {/* Quick Action Footer */}
                <div className="pt-2 flex items-center justify-between text-[9px] text-[#777]">
                  <button 
                    onClick={handleResetSwatches}
                    className="hover:text-white flex items-center gap-1 transition-colors"
                  >
                    <RotateCcw size={10} /> Reset Defaults
                  </button>
                  <button 
                    onClick={() => setIsPresetModalOpen(true)}
                    className="text-indigo-400 hover:text-indigo-300 font-medium flex items-center gap-1 transition-colors"
                  >
                    <Sparkles size={10} /> Palette Presets
                  </button>
                </div>
             </div>
          </div>

          <div className="flex items-center justify-between mt-3 pt-2 border-t border-white/5">
              <label className="text-[10px] text-[#999]">Clipping</label>
              <div className="w-[60%]">
                 <SelectInput value="None" options={[{label: 'None', value: 'none'}, {label: 'Clip', value: 'clip'}]} onChange={()=>{}} />
              </div>
          </div>
        </InspectorSection>

        {/* --- BORDERS --- */}
        <InspectorSection title="Borders" isOpen={expandedSections.borders} onToggle={() => toggleSection('borders')}>
            <PropertyRow label="Radius">
                <TextInput value={getStyle('borderRadius', '0px')} onChange={v => setStyle('borderRadius', v)} unit="PX" />
            </PropertyRow>
            <div className="mt-2 border-t border-white/5 pt-2">
                <div className="flex items-center gap-2 mb-2">
                    <div className="grid grid-cols-3 gap-1 p-1 bg-[#1a1a1a] border border-white/10 rounded-sm w-[30%] aspect-square">
                        <div className="col-start-2 border-b border-[#555]"/>
                        <div className="row-start-2 border-r border-[#555]"/>
                        <div className="row-start-2 col-start-2 bg-[#333]"/>
                        <div className="row-start-2 col-start-3 border-l border-[#555]"/>
                        <div className="row-start-3 col-start-2 border-t border-[#555]"/>
                    </div>
                    <div className="flex-1 space-y-2">
                        <PropertyRow label="Style">
                             <ToggleGroup value={getStyle('borderStyle', 'none')} onChange={v => setStyle('borderStyle', v)} options={[
                                 { value: 'none', icon: <X size={10}/> },
                                 { value: 'solid', icon: <Square size={10}/> },
                                 { value: 'dashed', icon: <MoreHorizontal size={10}/> },
                             ]} />
                        </PropertyRow>
                        <PropertyRow label="Width">
                             <TextInput value={getStyle('borderWidth', '0px')} onChange={v => setStyle('borderWidth', v)} unit="PX" />
                        </PropertyRow>
                        <PropertyRow label="Color">
                             <ColorInput value={getStyle('borderColor', 'transparent')} onChange={v => setStyle('borderColor', v)} />
                        </PropertyRow>
                    </div>
                </div>
            </div>
        </InspectorSection>

         {/* --- EFFECTS --- */}
         <InspectorSection title="Effects" isOpen={expandedSections.effects} onToggle={() => toggleSection('effects')}>
            <PropertyRow label="Opacity">
                 <div className="flex items-center gap-2 w-full">
                     <input type="range" min="0" max="1" step="0.1" value={getStyle('opacity', '1')} onChange={e => setStyle('opacity', e.target.value)} className="w-full h-1 bg-[#333] rounded-lg appearance-none cursor-pointer accent-indigo-500" />
                     <span className="text-[10px] w-8 text-right text-[#ccc]">{Math.round((parseFloat(getStyle('opacity', '1')) || 1) * 100)}%</span>
                 </div>
            </PropertyRow>
            <PropertyRow label="Cursor">
                <SelectInput value={getStyle('cursor', 'auto')} onChange={v => setStyle('cursor', v)} options={[
                    { label: 'Auto', value: 'auto' },
                    { label: 'Pointer', value: 'pointer' },
                    { label: 'Text', value: 'text' },
                    { label: 'Not Allowed', value: 'not-allowed' },
                ]} />
            </PropertyRow>
         </InspectorSection>

      </div>
    );
  };

  const renderImageAssetsPanel = () => {
    const selectedNode = selectedId ? findNode(activePage.sections, selectedId) : null;
    const isImageSelected = selectedNode && (selectedNode.id === 'image' || Boolean(selectedNode.content?.url) || Boolean(selectedNode.styles?.backgroundImage));

    const allImages = STOCK_IMAGE_CATEGORIES.flatMap(cat => cat.images);
    const filteredImages = allImages.filter(img => {
      const matchesCategory = activeImageCategory === 'all' || img.category === activeImageCategory;
      const matchesSearch = !imageSearchQuery.trim() || 
        img.title.toLowerCase().includes(imageSearchQuery.toLowerCase()) || 
        img.category.toLowerCase().includes(imageSearchQuery.toLowerCase()) ||
        (img.photographer && img.photographer.toLowerCase().includes(imageSearchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });

    const handleApplyImageToNode = (imgUrl: string, imgTitle: string) => {
      if (selectedNode) {
        recordHistory();
        if (selectedNode.styles?.backgroundImage) {
          updateNode(selectedNode.instanceId, {
            styles: { ...selectedNode.styles, backgroundImage: `url(${imgUrl})` }
          });
        } else {
          updateNode(selectedNode.instanceId, {
            content: { ...selectedNode.content, url: imgUrl }
          });
        }
        triggerToast(`Updated image on "${selectedNode.name || 'selected element'}"`);
      } else {
        addElement({
          id: 'image',
          name: 'Image',
          icon: <ImageIcon size={18} strokeWidth={1} />,
          desc: 'Stock image asset.',
          content: { url: imgUrl, alt: imgTitle },
          styles: { width: '100%', height: 'auto', borderRadius: '4px', objectFit: 'cover' }
        });
        triggerToast(`Added "${imgTitle}" to page`);
      }
    };

    return (
      <div className="flex flex-col h-full bg-[#2b2b2b] text-white font-sans">
        {/* Active Selection Indicator banner */}
        <div className="px-3 py-2 bg-[#222] border-b border-white/5 flex items-center justify-between shrink-0">
          {isImageSelected ? (
            <div className="flex items-center gap-2 text-[10px] text-emerald-400 font-medium min-w-0">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
              <span className="truncate">Target: <strong className="text-white">{selectedNode.name || 'Image'}</strong></span>
            </div>
          ) : (
            <div className="text-[10px] text-[#888] flex items-center gap-1.5">
              <MousePointer2 size={12} className="text-indigo-400 shrink-0" />
              <span className="truncate">Select canvas image to swap, or click to insert.</span>
            </div>
          )}
        </div>

        {/* Search input & filters */}
        <div className="p-3 border-b border-white/5 bg-[#252525] space-y-2.5 shrink-0">
          <div className="relative">
            <Search size={13} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-[#777]" />
            <input
              type="text"
              value={imageSearchQuery}
              onChange={(e) => setImageSearchQuery(e.target.value)}
              placeholder="Search high-res stock photos..."
              className="w-full bg-[#181818] border border-white/10 rounded-xs pl-8 pr-7 py-1.5 text-[11px] text-[#f4f4f4] placeholder-[#666] focus:border-indigo-500 focus:outline-none transition-colors"
            />
            {imageSearchQuery && (
              <button onClick={() => setImageSearchQuery('')} className="absolute right-2 top-1/2 -translate-y-1/2 text-[#777] hover:text-white p-0.5">
                <X size={12} />
              </button>
            )}
          </div>

          {/* Category Tabs Filter */}
          <div className="flex items-center gap-1 overflow-x-auto custom-scrollbar pb-1 -mx-1 px-1">
            <button
              onClick={() => setActiveImageCategory('all')}
              className={`px-2.5 py-0.5 text-[10px] font-bold rounded-full whitespace-nowrap transition-all ${
                activeImageCategory === 'all' 
                  ? 'bg-indigo-600 text-white shadow-sm' 
                  : 'bg-white/5 text-[#aaa] hover:bg-white/10 hover:text-white'
              }`}
            >
              All ({allImages.length})
            </button>
            {STOCK_IMAGE_CATEGORIES.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveImageCategory(cat.id)}
                className={`px-2.5 py-0.5 text-[10px] font-bold rounded-full whitespace-nowrap transition-all ${
                  activeImageCategory === cat.id 
                    ? 'bg-indigo-600 text-white shadow-sm' 
                    : 'bg-white/5 text-[#aaa] hover:bg-white/10 hover:text-white'
                }`}
              >
                {cat.name.split(' ')[0]} ({cat.images.length})
              </button>
            ))}
          </div>
        </div>

        {/* Image Grid Content */}
        <div className="flex-1 overflow-y-auto p-3 custom-scrollbar space-y-3">
          {filteredImages.length === 0 ? (
            <div className="p-8 text-center text-[#777] space-y-2">
              <ImageIcon size={32} className="mx-auto text-[#444]" />
              <p className="text-[11px]">No stock images found matching "{imageSearchQuery}"</p>
              <button
                onClick={() => { setImageSearchQuery(''); setActiveImageCategory('all'); }}
                className="text-[10px] text-indigo-400 hover:underline font-bold"
              >
                Reset search filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-2.5">
              {filteredImages.map(img => (
                <div
                  key={img.id}
                  className="group relative rounded-xs bg-[#1f1f1f] border border-white/5 hover:border-indigo-500/80 overflow-hidden shadow-md transition-all flex flex-col"
                >
                  <div className="relative aspect-video w-full overflow-hidden bg-[#111]">
                    <img
                      src={img.url}
                      alt={img.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                    <div className="absolute top-1.5 right-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          navigator.clipboard.writeText(img.url);
                          triggerToast('Copied stock image URL');
                        }}
                        className="p-1 bg-black/70 hover:bg-black text-white rounded-xs text-[9px] transition-colors shadow"
                        title="Copy image URL"
                      >
                        <Copy size={11} />
                      </button>
                    </div>
                  </div>

                  <div className="p-2 bg-[#222] border-t border-white/5 flex items-center justify-between gap-2">
                    <div className="min-w-0 flex-1">
                      <div className="text-[11px] font-bold text-white truncate">{img.title}</div>
                      <div className="text-[9px] text-[#888] truncate">
                        {img.photographer ? `By ${img.photographer}` : img.category} {img.dimensions && `• ${img.dimensions}`}
                      </div>
                    </div>

                    <button
                      onClick={() => handleApplyImageToNode(img.url, img.title)}
                      className="px-2.5 py-1 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xs text-[10px] font-bold transition-all shadow flex items-center gap-1 shrink-0"
                    >
                      {isImageSelected ? (
                        <>
                          <Check size={11} />
                          Replace
                        </>
                      ) : (
                        <>
                          <Plus size={11} />
                          Insert
                        </>
                      )}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  };

  const renderLayoutModal = () => (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-12 animate-in fade-in zoom-in-95 duration-200">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsLayoutPopupOpen(false)} />
      <div className="bg-[#1e1e1e] w-full max-w-4xl h-[70vh] rounded-none border border-white/10 shadow-2xl flex flex-col overflow-hidden relative z-[110]">
        <div className="h-14 border-b border-white/5 flex items-center justify-between px-6 bg-[#252525]">
          <h2 className="text-sm font-bold text-white uppercase tracking-widest font-normal">Add Layout</h2>
          <button onClick={() => setIsLayoutPopupOpen(false)} className="opacity-40 hover:opacity-100 transition-opacity"><X size={20}/></button>
        </div>
        <div className="h-12 border-b border-white/5 flex px-6 gap-6 bg-[#1a1a1a] overflow-x-auto custom-scrollbar whitespace-nowrap shrink-0">
          {Object.keys(LAYOUT_TEMPLATES).map(cat => (
            <button key={cat} onClick={() => setActiveLayoutCategory(cat)} className={`text-[10px] uppercase tracking-widest font-bold h-full border-b-2 transition-all shrink-0 ${activeLayoutCategory === cat ? 'border-indigo-500 text-white' : 'border-transparent text-slate-500 hover:text-slate-300'}`}>{cat}</button>
          ))}
        </div>
        <div className="flex-1 overflow-y-auto p-8 bg-[#1e1e1e] custom-scrollbar">
           <div className="grid grid-cols-2 gap-8">
              {LAYOUT_TEMPLATES[activeLayoutCategory as keyof typeof LAYOUT_TEMPLATES]?.map(layout => (
                <div key={layout.id} className="group cursor-pointer" onClick={() => insertLayout(layout)}>
                   <div className="aspect-video bg-[#050505] rounded-none border border-white/5 overflow-hidden flex items-center justify-center relative transition-all group-hover:border-indigo-500/50 p-4">
                      <div className="w-full h-full bg-[#252525] border border-white/5 rounded-none flex flex-col items-center justify-center p-4">
                         <div className="w-1/2 h-1 bg-white/20 mb-2" />
                         <div className="w-3/4 h-1 bg-white/10 mb-4" />
                         <div className="w-1/4 h-3 bg-indigo-500/30 rounded-none" />
                      </div>
                      <div className="absolute inset-0 bg-indigo-600/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-xs">
                         <div className="bg-indigo-600 text-white text-[10px] font-bold px-4 py-2 rounded-none uppercase tracking-widest shadow-lg">Select Layout</div>
                      </div>
                   </div>
                   <p className="mt-3 text-[12px] text-white font-bold">{layout.name}</p>
                   {layout.description && <p className="mt-0.5 text-[10px] text-slate-400 font-normal leading-relaxed">{layout.description}</p>}
                </div>
              ))}
           </div>
        </div>
      </div>
    </div>
  );

  const BlueTrigger = ({ index }: { index?: number }) => {
    if (isPreviewMode) return null;
    return (
      <div className="w-full flex justify-center h-4 relative group/trigger z-30 my-0.5">
         <div className="absolute inset-0 border-t border-indigo-500/20 opacity-0 group-hover/trigger:opacity-100 transition-opacity" />
         <button 
           onClick={(e) => {
             e.stopPropagation();
             setInsertIndex(index !== undefined ? index : null);
             setIsLayoutPopupOpen(true);
           }} 
           className="w-6 h-6 rounded-sm bg-blue-600 hover:bg-blue-500 text-white flex items-center justify-center absolute -top-3 shadow-lg opacity-0 group-hover/trigger:opacity-100 transition-all scale-75 group-hover/trigger:scale-100 cursor-pointer"
           title={index !== undefined ? `Insert section at position ${index + 1}` : "Add layout section"}
         >
           <Plus size={14} />
         </button>
      </div>
    );
  };

  if (currentView === 'dashboard') {
    return (
      <div className="min-h-screen bg-[#F9FAFB] flex flex-col font-sans antialiased">
        <header className="h-14 border-b border-slate-200 bg-white flex items-center justify-between px-6 sticky top-0 z-50 font-normal">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#2b2b2b] rounded-none flex items-center justify-center shadow-lg font-normal"><Layout size={18} className="text-white" /></div>
            <span className="font-bold text-sm tracking-tight text-[#2b2b2b] font-normal">Siteflow studio</span>
          </div>
          <div className="w-8 h-8 rounded-none bg-slate-100 border border-slate-200 flex items-center justify-center text-[10px] font-normal">JD</div>
        </header>
        <main className="flex-1 p-12 bg-white flex flex-col items-center">
           <div className="w-full max-w-5xl animate-in fade-in duration-700">
              <div className="flex justify-between items-end mb-12">
                 <div><h1 className="text-3xl font-bold text-slate-900 font-normal">Workspace</h1><p className="text-slate-400 text-sm mt-1 font-normal">Scale production architecture.</p></div>
                 <button onClick={() => setCurrentView('builder')} className="bg-[#2b2b2b] text-white px-6 py-3 rounded-none font-normal text-sm shadow-xl flex items-center gap-2 hover:bg-black transition-all font-normal"><PlusCircle size={18}/> New site</button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div onClick={() => setCurrentView('builder')} className="bg-white border border-slate-100 rounded-none p-6 hover:shadow-2xl transition-all cursor-pointer group shadow-sm flex items-center justify-between font-normal">
                  <div className="flex items-center gap-4 font-normal">
                    <div className="w-12 h-12 bg-indigo-50 rounded-none flex items-center justify-center text-indigo-600 font-normal"><Globe size={24}/></div>
                    <div><h3 className="font-bold text-slate-900 text-sm font-normal">Main site</h3><p className="text-xs text-slate-400 font-normal">Active project</p></div>
                  </div>
                  <ChevronRight className="text-slate-200 group-hover:text-indigo-500 transition-colors" />
                </div>
              </div>
           </div>
        </main>
      </div>
    );
  }

  return (
    <div className="h-screen w-full bg-[#454545] flex font-sans overflow-hidden text-[#f4f4f4] antialiased">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      <style>{`
        body, html, * { font-family: 'Inter', sans-serif !important; letter-spacing: 0 !important; font-weight: 400 !important; }
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.1); }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .separator-r { border-right: 1px solid rgba(255, 255, 255, 0.05); }
        .separator-b { border-bottom: 1px solid rgba(255, 255, 255, 0.05); }
        .separator-l { border-left: 1px solid rgba(255, 255, 255, 0.05); }
        .separator-t { border-top: 1px solid rgba(255, 255, 255, 0.05); }
        input, select, textarea { font-weight: 400 !important; outline: none !important; }
      `}</style>

      {/* Floating Toolbar for Canvas Selection */}
      {!isPreviewMode && floatingToolbar && selectedId && (
          <div 
              className="fixed z-[90] flex items-center gap-1 bg-[#1a1a1a] border border-white/10 rounded-sm shadow-xl p-1 animate-in fade-in zoom-in-95 duration-100"
              style={{ top: floatingToolbar.y, left: floatingToolbar.x }}
              onClick={(e) => e.stopPropagation()}
          >
              <button className="p-1.5 hover:bg-white/10 rounded-sm text-[#f4f4f4] relative group" title="Select Parent">
                 <CornerUpLeft size={14} />
                 <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white text-[9px] px-1.5 py-0.5 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">Select Parent</span>
              </button>
              <div className="w-px h-3 bg-white/10 mx-0.5"></div>
              <button className="p-1.5 hover:bg-white/10 rounded-sm text-[#f4f4f4] group" title="Move Up">
                  <ArrowUp size={14} />
              </button>
              <button className="p-1.5 hover:bg-white/10 rounded-sm text-[#f4f4f4] group" title="Move Down">
                  <ArrowDown size={14} />
              </button>
              <div className="w-px h-3 bg-white/10 mx-0.5"></div>
              <button className="p-1.5 hover:bg-white/10 rounded-sm text-[#f4f4f4] group" title="Duplicate">
                  <CopyIcon size={14} />
              </button>
              <button onClick={() => deleteNode(selectedId)} className="p-1.5 hover:bg-red-500/20 hover:text-red-400 rounded-sm text-[#f4f4f4] group" title="Delete">
                  <Trash2 size={14} />
              </button>
          </div>
      )}
      
      {/* Context Menu for Navigator Long Press */}
      {!isPreviewMode && contextMenu && (
         <div 
            className="fixed z-[100] bg-[#1a1a1a] border border-white/10 rounded-sm shadow-2xl p-1 min-w-[140px] animate-in fade-in zoom-in-95 duration-100"
            style={{ top: contextMenu.y, left: contextMenu.x }}
            onClick={(e) => e.stopPropagation()}
         >
             <button onClick={() => handleExpandAll(contextMenu.node)} className="w-full text-left px-3 py-1.5 text-[11px] text-[#f4f4f4] hover:bg-white/5 rounded-sm flex items-center gap-2">
                 <Maximize2 size={12} className="opacity-50"/> Expand All
             </button>
             <button onClick={() => handleCollapseAll(contextMenu.node)} className="w-full text-left px-3 py-1.5 text-[11px] text-[#f4f4f4] hover:bg-white/5 rounded-sm flex items-center gap-2">
                 <Minimize2 size={12} className="opacity-50"/> Collapse All
             </button>
         </div>
      )}

      {/* FLOATING OVERLAY BUTTON WHEN IN PREVIEW MODE */}
      {isPreviewMode && (
        <div className="fixed top-4 right-6 z-[100] animate-in fade-in slide-in-from-top-2 duration-200">
          <button
            onClick={() => {
              setIsPreviewMode(false);
              triggerToast('Exited Preview Mode');
            }}
            className="flex items-center gap-2 px-3.5 py-2 bg-[#1a1a1a]/90 hover:bg-[#111] backdrop-blur-md border border-indigo-500/50 text-white text-[11px] font-semibold rounded-full shadow-2xl transition-all hover:scale-105 group"
          >
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <EyeOff size={13} className="text-indigo-400 group-hover:text-white transition-colors" />
            <span>Exit Clean Preview</span>
          </button>
        </div>
      )}
      {contextMenu && (
          <div className="fixed inset-0 z-[99]" onClick={() => setContextMenu(null)} />
      )}

      {isLayoutPopupOpen && renderLayoutModal()}

      {/* EDIT SWATCH MODAL */}
      {editingSwatch && (
        <div className="fixed inset-0 z-[120] flex items-center justify-center p-6 animate-in fade-in duration-200">
          <div className="absolute inset-0 bg-black/70 backdrop-blur-xs" onClick={() => setEditingSwatch(null)} />
          <div className="bg-[#1e1e1e] border border-white/10 w-full max-w-sm rounded-sm shadow-2xl p-5 relative z-[130] space-y-4 text-left">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <div className="flex items-center gap-2">
                <Palette size={16} className="text-indigo-400" />
                <h3 className="text-sm font-bold text-white uppercase tracking-wider">Edit Global Swatch</h3>
              </div>
              <button onClick={() => setEditingSwatch(null)} className="text-[#888] hover:text-white">
                <X size={16} />
              </button>
            </div>

            <div className="space-y-3">
              <div>
                <label className="text-[10px] text-[#aaa] block mb-1">Swatch Name</label>
                <input 
                  className="w-full bg-[#111] border border-white/10 text-white text-xs px-2.5 py-1.5 rounded-sm outline-none focus:border-indigo-500"
                  value={editSwatchName}
                  onChange={e => setEditSwatchName(e.target.value)}
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-[10px] text-[#aaa] block mb-1">Color Code</label>
                  <div className="flex items-center gap-2 bg-[#111] border border-white/10 px-2 py-1.5 rounded-sm">
                    <input 
                      type="color" 
                      className="w-4 h-4 rounded-sm border-0 p-0 cursor-pointer bg-transparent"
                      value={editSwatchColor.startsWith('#') && editSwatchColor.length === 7 ? editSwatchColor : '#000000'}
                      onChange={e => setEditSwatchColor(e.target.value)}
                    />
                    <input 
                      className="w-full bg-transparent text-xs text-white font-mono outline-none"
                      value={editSwatchColor}
                      onChange={e => setEditSwatchColor(e.target.value)}
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[10px] text-[#aaa] block mb-1">Category</label>
                  <select
                    className="w-full bg-[#111] border border-white/10 text-white text-xs px-2 py-1.5 rounded-sm outline-none cursor-pointer"
                    value={editSwatchCategory}
                    onChange={e => setEditSwatchCategory(e.target.value as any)}
                  >
                    <option value="Brand">Brand</option>
                    <option value="Neutral">Neutral</option>
                    <option value="Accent">Accent</option>
                    <option value="Custom">Custom</option>
                  </select>
                </div>
              </div>

              <div className="pt-2">
                <label className="flex items-center gap-2 cursor-pointer text-xs text-[#ccc]">
                  <input 
                    type="checkbox" 
                    checked={updateMatchingBackgrounds} 
                    onChange={e => setUpdateMatchingBackgrounds(e.target.checked)}
                    className="rounded-none accent-indigo-600"
                  />
                  <span>Sync all background colors matching original hex</span>
                </label>
              </div>
            </div>

            <div className="flex items-center justify-end gap-2 pt-2 border-t border-white/10">
              <button 
                onClick={() => setEditingSwatch(null)} 
                className="px-3 py-1.5 text-xs text-[#aaa] hover:text-white"
              >
                Cancel
              </button>
              <button 
                onClick={handleUpdateSwatch}
                className="px-4 py-1.5 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-medium rounded-sm shadow-md transition-colors"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}

      {/* PRESET PALETTES MODAL */}
      {isPresetModalOpen && (
        <div className="fixed inset-0 z-[120] flex items-center justify-center p-6 animate-in fade-in duration-200">
          <div className="absolute inset-0 bg-black/70 backdrop-blur-xs" onClick={() => setIsPresetModalOpen(false)} />
          <div className="bg-[#1e1e1e] border border-white/10 w-full max-w-xl rounded-sm shadow-2xl p-6 relative z-[130] space-y-4 text-left">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <div className="flex items-center gap-2">
                <Sparkles size={18} className="text-indigo-400" />
                <div>
                  <h3 className="text-sm font-bold text-white uppercase tracking-wider">Palette Presets</h3>
                  <p className="text-[10px] text-[#888]">Import professionally designed studio color systems</p>
                </div>
              </div>
              <button onClick={() => setIsPresetModalOpen(false)} className="text-[#888] hover:text-white">
                <X size={18} />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-[60vh] overflow-y-auto custom-scrollbar p-1">
              {PALETTE_PRESETS.map((preset, idx) => (
                <div 
                  key={idx}
                  className="bg-[#151515] border border-white/10 rounded-sm p-4 hover:border-indigo-500/50 transition-all flex flex-col justify-between space-y-3"
                >
                  <div>
                    <h4 className="text-xs font-bold text-white">{preset.name}</h4>
                    <p className="text-[10px] text-[#777] mt-0.5">{preset.description}</p>
                    <div className="flex items-center gap-1.5 mt-3">
                      {preset.swatches.map(s => (
                        <div 
                          key={s.id} 
                          className="w-5 h-5 rounded-sm border border-white/20 shadow-sm" 
                          style={{ backgroundColor: s.color }}
                          title={`${s.name} (${s.color})`}
                        />
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-end gap-2 pt-2 border-t border-white/5">
                    <button 
                      onClick={() => handleLoadPreset(preset, 'append')}
                      className="px-2.5 py-1 bg-white/5 hover:bg-white/10 text-[10px] text-white rounded-sm transition-colors"
                    >
                      + Append
                    </button>
                    <button 
                      onClick={() => handleLoadPreset(preset, 'replace')}
                      className="px-3 py-1 bg-indigo-600 hover:bg-indigo-500 text-[10px] text-white font-medium rounded-sm shadow-sm transition-colors"
                    >
                      Replace All
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* CSS EXPORT MODAL */}
      {isCssExportOpen && (
        <div className="fixed inset-0 z-[120] flex items-center justify-center p-6 animate-in fade-in duration-200">
          <div className="absolute inset-0 bg-black/70 backdrop-blur-xs" onClick={() => setIsCssExportOpen(false)} />
          <div className="bg-[#1e1e1e] border border-white/10 w-full max-w-md rounded-sm shadow-2xl p-5 relative z-[130] space-y-3 text-left">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <div className="flex items-center gap-2">
                <Code size={16} className="text-indigo-400" />
                <h3 className="text-sm font-bold text-white uppercase tracking-wider">Export CSS Variables</h3>
              </div>
              <button onClick={() => setIsCssExportOpen(false)} className="text-[#888] hover:text-white">
                <X size={16} />
              </button>
            </div>

            <p className="text-[10px] text-[#aaa]">
              Use these global CSS custom properties directly in your project stylesheets:
            </p>

            <pre className="bg-[#111] border border-white/10 p-3 rounded-sm text-[10px] text-indigo-300 font-mono overflow-x-auto max-h-56 custom-scrollbar select-all">
              {generateCssVariables()}
            </pre>

            <div className="flex items-center justify-between pt-2 border-t border-white/10">
              <span className="text-[10px] text-[#777]">{swatches.length} variables generated</span>
              <button 
                onClick={() => {
                  navigator.clipboard.writeText(generateCssVariables());
                  triggerToast('Copied CSS variables to clipboard!');
                }}
                className="px-3 py-1.5 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-medium rounded-sm shadow-md transition-colors flex items-center gap-1.5"
              >
                <Copy size={12} />
                Copy to Clipboard
              </button>
            </div>
          </div>
        </div>
      )}

      {/* CREATE PAGE MODAL */}
      {isCreatePageOpen && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-xs z-[150] flex items-center justify-center p-4 animate-in fade-in duration-150">
          <div className="bg-[#1e1e1e] border border-white/10 w-full max-w-lg rounded-sm shadow-2xl p-6 relative space-y-4 text-left">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <div className="flex items-center gap-2">
                <FilePlus size={18} className="text-indigo-400" />
                <h3 className="text-sm font-bold text-white uppercase tracking-wider">Create New Page</h3>
              </div>
              <button onClick={() => setIsCreatePageOpen(false)} className="text-[#888] hover:text-white">
                <X size={16} />
              </button>
            </div>

            <div className="space-y-3 text-xs">
              <div>
                <label className="block text-[10px] uppercase tracking-wider text-[#aaa] mb-1 font-bold">Page Title *</label>
                <input 
                  type="text" 
                  value={newPageName} 
                  onChange={(e) => {
                    setNewPageName(e.target.value);
                    if (!newPageSlug || newPageSlug === '/' + newPageName.toLowerCase().replace(/[^a-z0-9]+/g, '-')) {
                      setNewPageSlug('/' + e.target.value.toLowerCase().replace(/[^a-z0-9]+/g, '-'));
                    }
                  }}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && newPageName.trim()) {
                      e.preventDefault();
                      handleCreatePage();
                    }
                  }}
                  placeholder="e.g. Services, Portfolio, Lead Capture" 
                  className="w-full bg-[#111] border border-white/10 rounded-sm px-3 py-2 text-white focus:border-indigo-500 font-mono"
                  autoFocus
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[10px] uppercase tracking-wider text-[#aaa] mb-1 font-bold">URL Slug Path</label>
                  <input 
                    type="text" 
                    value={newPageSlug} 
                    onChange={(e) => setNewPageSlug(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' && newPageName.trim()) {
                        e.preventDefault();
                        handleCreatePage();
                      }
                    }}
                    placeholder="/services" 
                    className="w-full bg-[#111] border border-white/10 rounded-sm px-3 py-2 text-white focus:border-indigo-500 font-mono"
                  />
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-wider text-[#aaa] mb-1 font-bold">Category Group</label>
                  <select 
                    value={newPageCategory} 
                    onChange={(e) => setNewPageCategory(e.target.value as any)}
                    className="w-full bg-[#111] border border-white/10 rounded-sm px-3 py-2 text-white focus:border-indigo-500"
                  >
                    <option value="pages">Static Pages</option>
                    <option value="cms">CMS Collection Pages</option>
                    <option value="utility">Utility Pages</option>
                    <option value="ecommerce">Ecommerce Pages</option>
                    <option value="user">User Pages</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[10px] uppercase tracking-wider text-[#aaa] mb-1 font-bold">Parent Folder (Optional)</label>
                  <select 
                    value={newPageFolderId} 
                    onChange={(e) => setNewPageFolderId(e.target.value)}
                    className="w-full bg-[#111] border border-white/10 rounded-sm px-3 py-2 text-white focus:border-indigo-500"
                  >
                    <option value="">None (Root Level)</option>
                    {folders.map(f => (
                      <option key={f.id} value={f.id}>📁 {f.name}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-wider text-[#aaa] mb-1 font-bold">Page Layout Preset</label>
                  <select 
                    value={newPagePreset} 
                    onChange={(e) => setNewPagePreset(e.target.value)}
                    className="w-full bg-[#111] border border-white/10 rounded-sm px-3 py-2 text-white focus:border-indigo-500"
                  >
                    <option value="landing">Landing Page (Hero + Features)</option>
                    <option value="lead">Lead Magnet / Lead Capture Page</option>
                    <option value="about">About / Story Page</option>
                    <option value="contact">Contact Form Page</option>
                    <option value="404">404 Error Page</option>
                    <option value="login">Authentication / Login</option>
                    <option value="blog-template">CMS Blog Post Template</option>
                    <option value="product-template">Ecommerce Product Template</option>
                    <option value="blank">Blank Page (Navbar + Footer)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[10px] uppercase tracking-wider text-[#aaa] mb-1 font-bold">SEO Title</label>
                <input 
                  type="text" 
                  value={newPageSeoTitle} 
                  onChange={(e) => setNewPageSeoTitle(e.target.value)}
                  placeholder="Meta title for search engines" 
                  className="w-full bg-[#111] border border-white/10 rounded-sm px-3 py-2 text-white focus:border-indigo-500"
                />
              </div>

              <div>
                <label className="block text-[10px] uppercase tracking-wider text-[#aaa] mb-1 font-bold">SEO Description</label>
                <textarea 
                  value={newPageSeoDesc} 
                  onChange={(e) => setNewPageSeoDesc(e.target.value)}
                  placeholder="Meta description for search engine listings..." 
                  rows={2}
                  className="w-full bg-[#111] border border-white/10 rounded-sm px-3 py-2 text-white focus:border-indigo-500 custom-scrollbar"
                />
              </div>
            </div>

            <div className="flex items-center justify-end gap-2 pt-3 border-t border-white/10">
              <button 
                onClick={() => setIsCreatePageOpen(false)}
                className="px-4 py-2 bg-[#2a2a2a] hover:bg-[#333] text-white text-xs font-medium rounded-sm"
              >
                Cancel
              </button>
              <button 
                onClick={handleCreatePage}
                disabled={!newPageName.trim()}
                className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 text-white text-xs font-medium rounded-sm shadow-md transition-colors flex items-center gap-1.5"
              >
                <Plus size={14} />
                Create Page
              </button>
            </div>
          </div>
        </div>
      )}

      {/* CREATE FOLDER MODAL */}
      {isCreateFolderOpen && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-xs z-[150] flex items-center justify-center p-4 animate-in fade-in duration-150">
          <div className="bg-[#1e1e1e] border border-white/10 w-full max-w-md rounded-sm shadow-2xl p-6 relative space-y-4 text-left">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <div className="flex items-center gap-2">
                <FolderPlus size={18} className="text-amber-400" />
                <h3 className="text-sm font-bold text-white uppercase tracking-wider">Create Page Folder</h3>
              </div>
              <button onClick={() => setIsCreateFolderOpen(false)} className="text-[#888] hover:text-white">
                <X size={16} />
              </button>
            </div>

            <div className="space-y-3 text-xs">
              <div>
                <label className="block text-[10px] uppercase tracking-wider text-[#aaa] mb-1 font-bold">Folder Name *</label>
                <input 
                  type="text" 
                  value={newFolderName} 
                  onChange={(e) => setNewFolderName(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && newFolderName.trim()) {
                      e.preventDefault();
                      handleCreateFolder();
                    }
                  }}
                  placeholder="e.g. Legal, Company, Products, Portal" 
                  className="w-full bg-[#111] border border-white/10 rounded-sm px-3 py-2 text-white focus:border-amber-500"
                  autoFocus
                />
              </div>

              <div>
                <label className="block text-[10px] uppercase tracking-wider text-[#aaa] mb-1 font-bold">Category Group</label>
                <select 
                  value={newFolderCategory} 
                  onChange={(e) => setNewFolderCategory(e.target.value as any)}
                  className="w-full bg-[#111] border border-white/10 rounded-sm px-3 py-2 text-white focus:border-amber-500"
                >
                  <option value="pages">Static Pages</option>
                  <option value="cms">CMS Collection Pages</option>
                  <option value="utility">Utility Pages</option>
                  <option value="ecommerce">Ecommerce Pages</option>
                  <option value="user">User Pages</option>
                </select>
              </div>
            </div>

            <div className="flex items-center justify-end gap-2 pt-3 border-t border-white/10">
              <button 
                onClick={() => setIsCreateFolderOpen(false)}
                className="px-4 py-2 bg-[#2a2a2a] hover:bg-[#333] text-white text-xs font-medium rounded-sm"
              >
                Cancel
              </button>
              <button 
                onClick={handleCreateFolder}
                disabled={!newFolderName.trim()}
                className="px-4 py-2 bg-amber-600 hover:bg-amber-500 disabled:opacity-50 text-white text-xs font-medium rounded-sm shadow-md transition-colors flex items-center gap-1.5"
              >
                <FolderPlus size={14} />
                Create Folder
              </button>
            </div>
          </div>
        </div>
      )}

      {/* PAGE SETTINGS DRAWER / MODAL */}
      {editingPageSettings && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-xs z-[160] flex items-center justify-center p-4 animate-in fade-in duration-150">
          <div className="bg-[#1e1e1e] border border-white/10 w-full max-w-xl rounded-sm shadow-2xl p-6 relative space-y-4 text-left">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <div className="flex items-center gap-2">
                <Settings size={18} className="text-indigo-400" />
                <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                  Page Settings — {editingPageSettings.name}
                </h3>
              </div>
              <button onClick={() => setEditingPageSettings(null)} className="text-[#888] hover:text-white">
                <X size={16} />
              </button>
            </div>

            {/* Navigation Tabs */}
            <div className="flex border-b border-white/10 gap-4 text-xs font-medium">
              <button 
                onClick={() => setSettingsActiveTab('general')}
                className={`pb-2 border-b-2 transition-colors ${settingsActiveTab === 'general' ? 'border-indigo-500 text-white font-bold' : 'border-transparent text-[#888] hover:text-white'}`}
              >
                General Settings
              </button>
              <button 
                onClick={() => setSettingsActiveTab('seo')}
                className={`pb-2 border-b-2 transition-colors ${settingsActiveTab === 'seo' ? 'border-indigo-500 text-white font-bold' : 'border-transparent text-[#888] hover:text-white'}`}
              >
                SEO & OpenGraph
              </button>
              <button 
                onClick={() => setSettingsActiveTab('access')}
                className={`pb-2 border-b-2 transition-colors ${settingsActiveTab === 'access' ? 'border-indigo-500 text-white font-bold' : 'border-transparent text-[#888] hover:text-white'}`}
              >
                Access & Protection
              </button>
            </div>

            {/* TAB CONTENT: GENERAL */}
            {settingsActiveTab === 'general' && (
              <div className="space-y-3 text-xs">
                <div>
                  <label className="block text-[10px] uppercase tracking-wider text-[#aaa] mb-1 font-bold">Page Name *</label>
                  <input 
                    type="text" 
                    value={settingsName} 
                    onChange={(e) => setSettingsName(e.target.value)}
                    className="w-full bg-[#111] border border-white/10 rounded-sm px-3 py-2 text-white focus:border-indigo-500"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[10px] uppercase tracking-wider text-[#aaa] mb-1 font-bold">URL Path / Slug</label>
                    <input 
                      type="text" 
                      value={settingsSlug} 
                      onChange={(e) => setSettingsSlug(e.target.value)}
                      className="w-full bg-[#111] border border-white/10 rounded-sm px-3 py-2 text-white focus:border-indigo-500 font-mono"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase tracking-wider text-[#aaa] mb-1 font-bold">Category</label>
                    <select 
                      value={settingsCategory} 
                      onChange={(e) => setSettingsCategory(e.target.value as any)}
                      className="w-full bg-[#111] border border-white/10 rounded-sm px-3 py-2 text-white focus:border-indigo-500"
                    >
                      <option value="pages">Static Pages</option>
                      <option value="cms">CMS Collection Pages</option>
                      <option value="utility">Utility Pages</option>
                      <option value="ecommerce">Ecommerce Pages</option>
                      <option value="user">User Pages</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-wider text-[#aaa] mb-1 font-bold">Parent Folder</label>
                  <select 
                    value={settingsFolderId} 
                    onChange={(e) => setSettingsFolderId(e.target.value)}
                    className="w-full bg-[#111] border border-white/10 rounded-sm px-3 py-2 text-white focus:border-indigo-500"
                  >
                    <option value="">None (Root Level)</option>
                    {folders.map(f => (
                      <option key={f.id} value={f.id}>📁 {f.name}</option>
                    ))}
                  </select>
                </div>

                <div className="pt-2 border-t border-white/10 space-y-2">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input 
                      type="checkbox" 
                      checked={settingsIsHome} 
                      onChange={(e) => setSettingsIsHome(e.target.checked)}
                      className="rounded-xs bg-[#111] border-white/20 text-indigo-600 focus:ring-0"
                    />
                    <span className="text-white font-medium">Set as Homepage (`/`)</span>
                  </label>

                  <label className="flex items-center gap-2 cursor-pointer">
                    <input 
                      type="checkbox" 
                      checked={settingsIsDraft} 
                      onChange={(e) => setSettingsIsDraft(e.target.checked)}
                      className="rounded-xs bg-[#111] border-white/20 text-amber-500 focus:ring-0"
                    />
                    <span className="text-white font-medium">Draft Mode (Hidden from published nav)</span>
                  </label>
                </div>
              </div>
            )}

            {/* TAB CONTENT: SEO */}
            {settingsActiveTab === 'seo' && (
              <div className="space-y-3 text-xs">
                <div>
                  <label className="block text-[10px] uppercase tracking-wider text-[#aaa] mb-1 font-bold">Title Tag (&lt;title&gt;)</label>
                  <input 
                    type="text" 
                    value={settingsSeoTitle} 
                    onChange={(e) => setSettingsSeoTitle(e.target.value)}
                    placeholder="Page Title | Brand Name"
                    className="w-full bg-[#111] border border-white/10 rounded-sm px-3 py-2 text-white focus:border-indigo-500"
                  />
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-wider text-[#aaa] mb-1 font-bold">Meta Description</label>
                  <textarea 
                    value={settingsSeoDesc} 
                    onChange={(e) => setSettingsSeoDesc(e.target.value)}
                    placeholder="Enter search engine summary text (150-160 chars)..." 
                    rows={3}
                    className="w-full bg-[#111] border border-white/10 rounded-sm px-3 py-2 text-white focus:border-indigo-500 custom-scrollbar"
                  />
                </div>

                {/* Live SERP Preview */}
                <div className="p-3 bg-[#111] border border-white/10 rounded-sm space-y-1">
                  <span className="text-[9px] uppercase tracking-widest text-[#666] font-bold block">Search Engine Result Preview</span>
                  <div className="text-indigo-400 font-medium text-sm truncate">{settingsSeoTitle || settingsName}</div>
                  <div className="text-emerald-500 text-[10px] font-mono">https://siteflow.app{settingsSlug}</div>
                  <div className="text-[#aaa] text-[11px] line-clamp-2">{settingsSeoDesc || 'No meta description set for this page.'}</div>
                </div>
              </div>
            )}

            {/* TAB CONTENT: ACCESS */}
            {settingsActiveTab === 'access' && (
              <div className="space-y-3 text-xs">
                <div>
                  <label className="block text-[10px] uppercase tracking-wider text-[#aaa] mb-1 font-bold">Password Protection</label>
                  <input 
                    type="password" 
                    value={settingsPassword} 
                    onChange={(e) => setSettingsPassword(e.target.value)}
                    placeholder="Leave blank for public access"
                    className="w-full bg-[#111] border border-white/10 rounded-sm px-3 py-2 text-white focus:border-indigo-500 font-mono"
                  />
                  <p className="text-[10px] text-[#777] mt-1">If specified, visitors must enter this password to view page contents.</p>
                </div>

                <div className="p-3 bg-red-950/30 border border-red-500/20 rounded-sm space-y-2 mt-4">
                  <span className="text-[10px] uppercase tracking-wider text-red-400 font-bold block">Danger Zone</span>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-white font-medium">Delete Page</div>
                      <div className="text-[#888] text-[10px]">Permanently remove this page from the project.</div>
                    </div>
                    <button 
                      onClick={(e) => handleDeletePage(editingPageSettings.id, editingPageSettings.name, e)}
                      disabled={editingPageSettings.isHome}
                      className="px-3 py-1.5 bg-red-600 hover:bg-red-500 disabled:opacity-30 text-white text-xs font-medium rounded-sm"
                    >
                      Delete Page
                    </button>
                  </div>
                </div>
              </div>
            )}

            <div className="flex items-center justify-between pt-3 border-t border-white/10">
              <button 
                onClick={(e) => handleDuplicatePage(editingPageSettings, e)}
                className="px-3 py-1.5 bg-[#2b2b2b] hover:bg-[#333] text-white text-xs font-medium rounded-sm flex items-center gap-1.5"
              >
                <Copy size={12} />
                Duplicate Page
              </button>

              <div className="flex items-center gap-2">
                <button 
                  onClick={() => setEditingPageSettings(null)}
                  className="px-4 py-2 bg-[#2a2a2a] hover:bg-[#333] text-white text-xs font-medium rounded-sm"
                >
                  Cancel
                </button>
                <button 
                  onClick={handleSavePageSettings}
                  className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-medium rounded-sm shadow-md transition-colors flex items-center gap-1.5"
                >
                  <Check size={14} />
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* DELETE PAGE CONFIRMATION MODAL */}
      {pageToDelete && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-xs z-[200] flex items-center justify-center p-4 animate-in fade-in duration-150">
          <div className="bg-[#1e1e1e] border border-red-500/30 w-full max-w-sm rounded-sm shadow-2xl p-5 relative space-y-4 text-left">
            <div className="flex items-center gap-3 border-b border-white/10 pb-3">
              <div className="p-2 bg-red-500/10 text-red-400 rounded-sm shrink-0">
                <AlertCircle size={18} />
              </div>
              <div>
                <h3 className="text-sm font-bold text-white uppercase tracking-wider">Delete Page</h3>
                <p className="text-[10px] text-[#aaa]">This action cannot be undone.</p>
              </div>
            </div>

            <p className="text-xs text-[#ddd]">
              Are you sure you want to permanently delete <strong className="text-white">"{pageToDelete.name}"</strong>? All section layouts on this page will be deleted.
            </p>

            <div className="flex items-center justify-end gap-2 pt-2 border-t border-white/10">
              <button
                onClick={() => setPageToDelete(null)}
                className="px-3.5 py-1.5 bg-[#2b2b2b] hover:bg-[#333] text-white text-xs font-medium rounded-sm transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={confirmDeletePage}
                className="px-4 py-1.5 bg-red-600 hover:bg-red-500 text-white text-xs font-bold rounded-sm shadow-md transition-colors flex items-center gap-1.5"
              >
                <Trash2 size={12} />
                Confirm Delete
              </button>
            </div>
          </div>
        </div>
      )}

      {/* DELETE FOLDER CONFIRMATION MODAL */}
      {folderToDelete && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-xs z-[200] flex items-center justify-center p-4 animate-in fade-in duration-150">
          <div className="bg-[#1e1e1e] border border-red-500/30 w-full max-w-sm rounded-sm shadow-2xl p-5 relative space-y-4 text-left">
            <div className="flex items-center gap-3 border-b border-white/10 pb-3">
              <div className="p-2 bg-red-500/10 text-red-400 rounded-sm shrink-0">
                <AlertCircle size={18} />
              </div>
              <div>
                <h3 className="text-sm font-bold text-white uppercase tracking-wider">Delete Folder</h3>
                <p className="text-[10px] text-[#aaa]">Pages inside will be moved to root.</p>
              </div>
            </div>

            <p className="text-xs text-[#ddd]">
              Delete folder <strong className="text-white">"{folderToDelete.name}"</strong>? Pages inside this folder will not be deleted, but unassigned to root level.
            </p>

            <div className="flex items-center justify-end gap-2 pt-2 border-t border-white/10">
              <button
                onClick={() => setFolderToDelete(null)}
                className="px-3.5 py-1.5 bg-[#2b2b2b] hover:bg-[#333] text-white text-xs font-medium rounded-sm transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={confirmDeleteFolder}
                className="px-4 py-1.5 bg-red-600 hover:bg-red-500 text-white text-xs font-bold rounded-sm shadow-md transition-colors flex items-center gap-1.5"
              >
                <Trash2 size={12} />
                Delete Folder
              </button>
            </div>
          </div>
        </div>
      )}

      {/* TRANSIENT TOAST NOTIFICATION */}
      {toastMessage && (
        <div className="fixed bottom-5 right-5 z-[200] bg-[#1a1a1a] border border-indigo-500/50 text-white text-xs px-3 py-2 rounded-sm shadow-2xl flex items-center gap-2 animate-in slide-in-from-bottom duration-200">
          <CheckCircle2 size={14} className="text-indigo-400" />
          <span>{toastMessage}</span>
        </div>
      )}

      {!isPreviewMode && (
        <ActivityRail 
          active={activeLeftPanel} 
          setActive={(id) => {
            setActiveLeftPanel(id);
            if (id && isLeftPanelCollapsed) {
              setIsLeftPanelCollapsed(false);
            }
          }} 
          isCollapsed={isLeftPanelCollapsed}
          toggleCollapse={() => setIsLeftPanelCollapsed(prev => !prev)}
        />
      )}

      {!isPreviewMode && activeLeftPanel && (
        <div className="relative flex z-50 shrink-0">
          <aside className={`bg-[#2b2b2b] border-r border-white/5 flex flex-col shadow-2xl transition-all duration-300 font-normal relative overflow-hidden ${isLeftPanelCollapsed ? 'w-0 border-none opacity-0' : 'w-[320px] opacity-100'}`}>
            {activeLeftPanel === 'pages' ? (
               <div className="px-4 py-3 flex items-center justify-between border-b border-white/5 shrink-0">
                  <div className="flex items-center gap-2">
                    <Files size={14} className="text-indigo-400" />
                    <h2 className="text-[12px] font-bold text-[#f4f4f4] tracking-wide uppercase">Pages ({pages.length})</h2>
                  </div>
                  <div className="flex items-center gap-1.5">
                     <button 
                       onClick={() => openCreateFolderModal()}
                       className="p-1.5 hover:bg-white/10 rounded-sm text-[#aaa] hover:text-white transition-colors"
                       title="New Page Folder"
                     >
                       <FolderPlus size={14} />
                     </button>
                     <button 
                       onClick={() => openCreatePageModal()}
                       className="p-1.5 bg-indigo-600 hover:bg-indigo-500 rounded-sm text-white transition-colors shadow-sm"
                       title="New Page"
                     >
                       <Plus size={14} />
                     </button>
                  </div>
               </div>
            ) : activeLeftPanel === 'navigator' ? (
               <div className="px-4 py-3 flex items-center justify-between border-b border-white/5 shrink-0">
                  <h2 className="text-[12px] font-bold text-[#f4f4f4]">Navigator</h2>
               </div>
            ) : activeLeftPanel === 'images' ? (
               <div className="px-4 py-3 flex items-center justify-between border-b border-white/5 shrink-0">
                  <div className="flex items-center gap-2">
                    <ImageIcon size={14} className="text-indigo-400" />
                    <h2 className="text-[12px] font-bold text-[#f4f4f4] tracking-wide uppercase">Stock Image Library</h2>
                  </div>
                  <button onClick={() => setActiveLeftPanel(null)} className="opacity-40 hover:opacity-100 transition-opacity p-1"><ArrowLeft size={16} /></button>
               </div>
            ) : (
              <div className="p-4 border-b border-white/5 flex items-center justify-between font-normal shrink-0">
                 <h3 className="text-[11px] font-normal text-[#f4f4f4] tracking-widest uppercase">{activeLeftPanel}</h3>
                 <button onClick={() => setActiveLeftPanel(null)} className="opacity-40 hover:opacity-100 transition-opacity p-1"><ArrowLeft size={16} /></button>
              </div>
            )}

          <div className="flex-1 overflow-y-auto custom-scrollbar font-normal">
            {activeLeftPanel === 'images' && renderImageAssetsPanel()}
            {activeLeftPanel === 'add' && Object.entries(ELEMENT_LIBRARY).map(([key, items]) => (
              <div key={key} className="mb-0 border-b border-white/5 font-normal">
                <div 
                    onClick={() => toggleLibrary(key)} 
                    className="flex items-center justify-between w-full p-4 cursor-pointer hover:bg-white/5 transition-colors group"
                >
                    <h4 className="text-[11px] font-bold text-[#f4f4f4] uppercase tracking-wider">{key}</h4>
                    <ChevronDown size={14} className={`text-[#666] transition-transform duration-200 ${collapsedLibrary[key] ? '-rotate-90' : ''}`} />
                </div>
                {!collapsedLibrary[key] && (
                    <div className="flex flex-col gap-1 px-4 pb-4 animate-in slide-in-from-top-1 duration-200">
                      {items.map(item => (
                        <button key={item.id} onClick={() => addElement(item)} className="flex items-center justify-between w-full px-3 py-1.5 rounded-none bg-[#383838] border border-white/[0.02] hover:border-white/10 transition-all group font-normal">
                           <span className="text-[11px] font-normal">{item.name}</span>
                           <div className="text-[#f4f4f4] opacity-40 group-hover:opacity-100 transition-opacity">{item.icon}</div>
                        </button>
                      ))}
                    </div>
                )}
              </div>
            ))}

            {activeLeftPanel === 'navigator' && (
                <div className="p-2 space-y-1">
                    <div className="px-2.5 py-1.5 mb-2 bg-[#222] border border-white/5 rounded-sm flex items-center justify-between text-[10px] text-[#888]">
                        <span>Drag elements to reorder tree</span>
                        <Layers size={12} className="text-indigo-400 shrink-0" />
                    </div>
                    {activePage.sections.map(section => (
                        <NavigatorItem 
                            key={section.instanceId} 
                            node={section} 
                            depth={0}
                            selectedId={selectedId}
                            onSelect={(id) => handleNodeSelect(id)}
                            collapsedIds={collapsedNavigator}
                            onToggle={toggleNavigator}
                            onShowMenu={(node, pos) => setContextMenu({ node, ...pos })}
                            draggedNodeId={draggedNodeId}
                            setDraggedNodeId={setDraggedNodeId}
                            dropTarget={dropTarget}
                            setDropTarget={setDropTarget}
                            onReorder={handleReorderNode}
                            onMoveDirection={handleMoveNodeDirection}
                        />
                    ))}
                    {activePage.sections.length === 0 && (
                        <div className="p-8 text-center opacity-30 text-xs">No elements</div>
                    )}
                </div>
            )}

            {activeLeftPanel === 'pages' && (
               <div className="flex flex-col">
                  {/* Search bar */}
                  <div className="px-3 py-2.5 border-b border-white/5 bg-[#222]">
                     <div className="flex gap-1.5">
                       <div className="relative flex-1">
                          <Search size={12} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-[#777]" />
                          <input 
                            type="text" 
                            value={pageSearchQuery}
                            onChange={(e) => setPageSearchQuery(e.target.value)}
                            placeholder="Search pages & paths..." 
                            className="w-full bg-[#111] border border-white/10 rounded-sm py-1 pl-8 pr-2 text-[11px] text-[#f4f4f4] focus:border-indigo-500 transition-colors placeholder-[#666]" 
                          />
                          {pageSearchQuery && (
                            <button onClick={() => setPageSearchQuery('')} className="absolute right-2 top-1/2 -translate-y-1/2 text-[#777] hover:text-white">
                              <X size={10} />
                            </button>
                          )}
                       </div>
                       <button 
                         onClick={() => openCreatePageModal()}
                         className="px-2 py-1 bg-indigo-600/30 border border-indigo-500/40 text-indigo-300 rounded-sm hover:bg-indigo-600 hover:text-white text-[10px] font-medium transition-all flex items-center gap-1"
                       >
                         <Plus size={11} />
                         Add
                       </button>
                     </div>
                  </div>
                  
                  {/* Tree Structure by Category */}
                  <div className="p-2 space-y-2">
                     {[
                       { id: 'pages', label: 'Static Pages', icon: <Files size={12} className="text-indigo-400" /> },
                       { id: 'cms', label: 'CMS Collection Pages', icon: <Database size={12} className="text-amber-400" /> },
                       { id: 'utility', label: 'Utility Pages', icon: <Shield size={12} className="text-emerald-400" /> },
                       { id: 'ecommerce', label: 'Ecommerce Pages', icon: <ShoppingBag size={12} className="text-purple-400" /> },
                       { id: 'user', label: 'User Auth Pages', icon: <User size={12} className="text-cyan-400" /> }
                     ].map(category => {
                       const catKey = category.id as keyof typeof pagesState;
                       const catPages = pages.filter(p => {
                         if (p.category !== category.id) return false;
                         if (!pageSearchQuery) return true;
                         const query = pageSearchQuery.toLowerCase();
                         return p.name.toLowerCase().includes(query) || p.slug.toLowerCase().includes(query);
                       });
                       const catFolders = folders.filter(f => f.category === category.id);

                       if (pageSearchQuery && catPages.length === 0) return null;

                       return (
                         <div key={category.id} className="border border-white/5 bg-[#222]/50 rounded-sm overflow-hidden">
                            {/* Category Header */}
                            <div 
                              className="flex items-center justify-between py-1.5 px-2.5 bg-[#1a1a1a] cursor-pointer hover:bg-white/5 transition-colors select-none"
                              onClick={() => togglePagesState(catKey)}
                            >
                               <div className="flex items-center gap-2">
                                  {category.icon}
                                  <span className="text-[11px] font-bold text-[#f4f4f4] tracking-wide">{category.label}</span>
                                  <span className="text-[9px] bg-white/10 text-[#aaa] px-1.5 py-0.2 rounded-full font-mono">{catPages.length}</span>
                               </div>
                               <div className="flex items-center gap-1">
                                  <button 
                                    onClick={(e) => { e.stopPropagation(); openCreatePageModal(category.id as any); }}
                                    className="p-1 hover:bg-white/10 rounded-xs text-[#888] hover:text-white transition-colors"
                                    title={`Add new ${category.label} page`}
                                  >
                                    <Plus size={11} />
                                  </button>
                                  <ChevronDown size={12} className={`text-[#777] transition-transform duration-200 ${pagesState[catKey] ? '' : '-rotate-90'}`} />
                               </div>
                            </div>

                            {/* Category Items */}
                            {pagesState[catKey] && (
                               <div className="p-1 space-y-1">
                                  {/* Folder Containers */}
                                  {catFolders.map(folder => {
                                    const folderPages = catPages.filter(p => p.folderId === folder.id);
                                    const isExpanded = expandedFolders.has(folder.id);

                                    return (
                                      <div key={folder.id} className="border border-white/5 bg-[#1c1c1c] rounded-sm overflow-hidden">
                                        <div 
                                          className="flex items-center justify-between px-2 py-1.5 cursor-pointer hover:bg-white/5 group/folder select-none"
                                          onClick={() => toggleFolder(folder.id)}
                                        >
                                          <div className="flex items-center gap-2 truncate">
                                            <ChevronDown size={11} className={`text-[#777] transition-transform ${isExpanded ? '' : '-rotate-90'}`} />
                                            {isExpanded ? <FolderOpen size={12} className="text-amber-400 shrink-0" /> : <Folder size={12} className="text-amber-400 shrink-0" />}
                                            <span className="text-[11px] font-medium text-amber-200 truncate">{folder.name}</span>
                                            <span className="text-[9px] text-[#666] font-mono">({folderPages.length})</span>
                                          </div>
                                          
                                          <button 
                                            onClick={(e) => handleDeleteFolder(folder.id, folder.name, e)}
                                            className="opacity-0 group-hover/folder:opacity-100 p-1 text-[#888] hover:text-red-400 transition-opacity"
                                            title="Delete folder"
                                          >
                                            <Trash2 size={11} />
                                          </button>
                                        </div>

                                        {/* Folder Children */}
                                        {isExpanded && (
                                          <div className="pl-3 pr-1 pb-1 space-y-0.5 border-t border-white/5 bg-[#141414]">
                                            {folderPages.length === 0 ? (
                                              <div className="py-2 text-center text-[10px] text-[#666] italic">Empty folder</div>
                                            ) : (
                                              folderPages.map(page => renderPageRow(page))
                                            )}
                                          </div>
                                        )}
                                      </div>
                                    );
                                  })}

                                  {/* Root Pages (not in folder) */}
                                  {catPages.filter(p => !p.folderId).map(page => renderPageRow(page))}

                                  {catPages.length === 0 && catFolders.length === 0 && (
                                    <div className="py-2 px-3 text-[10px] text-[#666] italic text-center">No pages in this group</div>
                                  )}
                               </div>
                            )}
                         </div>
                       );
                     })}
                  </div>
               </div>
            )}
          </div>
        </aside>

        <button
          onClick={() => setIsLeftPanelCollapsed(prev => !prev)}
          className="absolute right-0 translate-x-full top-20 z-50 w-5 h-12 bg-[#2b2b2b] hover:bg-indigo-600 text-[#888] hover:text-white border border-white/10 border-l-0 rounded-r-md shadow-2xl flex items-center justify-center cursor-pointer transition-all group"
          title={isLeftPanelCollapsed ? "Expand Left Panel (320px)" : "Collapse Left Panel"}
        >
          {isLeftPanelCollapsed ? (
            <ChevronRight size={14} className="text-indigo-400 group-hover:text-white" />
          ) : (
            <ChevronLeft size={14} />
          )}
        </button>
      </div>
      )}

      <div className="flex-1 flex flex-col relative overflow-hidden border-r border-white/5">
        <header className="h-11 bg-[#2b2b2b] border-b border-white/5 flex items-center justify-between px-4 z-30 font-normal">
          <div className="flex items-center gap-4 font-normal">
            <div className="flex items-center gap-2 text-[10px] font-normal shrink-0"><span className="opacity-30 tracking-widest uppercase text-[9px]">Design:</span> {activePage.name}</div>
            <div className="h-4 w-px bg-white/5 font-normal shrink-0" />
            
            {/* Viewport Breakpoint Switcher Tabs */}
            <div className="flex items-center bg-[#1a1a1a] p-0.5 rounded-sm border border-white/10 gap-0.5 shrink-0">
              <button 
                onClick={() => handleSetViewMode('desktop')} 
                className={`flex items-center gap-1.5 px-2.5 py-1 rounded-sm text-[10px] font-medium transition-all ${viewMode === 'desktop' ? 'bg-indigo-600 text-white shadow-sm' : 'text-[#888] hover:text-white hover:bg-white/5'}`}
                title="Desktop Viewport (1200px)"
              >
                <Monitor size={13} />
                <span className="hidden lg:inline">Desktop</span>
              </button>
              <button 
                onClick={() => handleSetViewMode('tablet')} 
                className={`flex items-center gap-1.5 px-2.5 py-1 rounded-sm text-[10px] font-medium transition-all ${viewMode === 'tablet' ? 'bg-indigo-600 text-white shadow-sm' : 'text-[#888] hover:text-white hover:bg-white/5'}`}
                title="Tablet Viewport (768px)"
              >
                <Tablet size={13} />
                <span className="hidden lg:inline">Tablet</span>
              </button>
              <button 
                onClick={() => handleSetViewMode('mobile-landscape')} 
                className={`flex items-center gap-1.5 px-2.5 py-1 rounded-sm text-[10px] font-medium transition-all ${viewMode === 'mobile-landscape' ? 'bg-indigo-600 text-white shadow-sm' : 'text-[#888] hover:text-white hover:bg-white/5'}`}
                title="Mobile Landscape (568px)"
              >
                <Smartphone size={13} className="rotate-90" />
                <span className="hidden lg:inline">Mobile (L)</span>
              </button>
              <button 
                onClick={() => handleSetViewMode('mobile-portrait')} 
                className={`flex items-center gap-1.5 px-2.5 py-1 rounded-sm text-[10px] font-medium transition-all ${viewMode === 'mobile-portrait' ? 'bg-indigo-600 text-white shadow-sm' : 'text-[#888] hover:text-white hover:bg-white/5'}`}
                title="Mobile Portrait (375px)"
              >
                <Smartphone size={13} />
                <span className="hidden lg:inline">Mobile (P)</span>
              </button>
            </div>

            {/* Dynamic Width Slider & Pixel Badge */}
            <div className="flex items-center gap-2 bg-[#1a1a1a] px-2.5 py-1 rounded-sm border border-white/10 shrink-0">
              <span className="text-[9px] text-[#777] uppercase font-mono tracking-tight hidden sm:inline">Width</span>
              <input
                type="range"
                min="320"
                max="1200"
                step="5"
                value={canvasWidth}
                onChange={(e) => handleSliderWidthChange(Number(e.target.value))}
                className="w-20 md:w-28 h-1 bg-[#333] rounded-lg appearance-none cursor-pointer accent-indigo-500"
                title="Drag to dynamically resize canvas width"
              />
              <div className="flex items-center gap-1 bg-[#111] border border-white/10 px-1.5 py-0.5 rounded-sm">
                <input
                  type="number"
                  min="280"
                  max="1920"
                  value={canvasWidth}
                  onChange={(e) => {
                    const val = parseInt(e.target.value) || 320;
                    handleSliderWidthChange(val);
                  }}
                  className="w-9 bg-transparent text-[10px] text-indigo-300 font-mono text-right outline-none"
                />
                <span className="text-[9px] text-[#666] font-mono">px</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            {!isPreviewMode && (
              <div className="flex items-center bg-[#1a1a1a] p-0.5 rounded-sm border border-white/10 gap-0.5 shrink-0">
                <button
                  onClick={handleUndo}
                  disabled={historyPast.length === 0}
                  className="flex items-center gap-1.5 px-2.5 py-1 rounded-sm text-[10px] font-medium transition-all text-[#ccc] hover:text-white hover:bg-white/10 disabled:opacity-30 disabled:pointer-events-none disabled:hover:bg-transparent"
                  title={`Undo last action (${historyPast.length} available - Ctrl+Z / Cmd+Z)`}
                >
                  <RotateCcw size={13} className="text-indigo-400" />
                  <span className="hidden md:inline">Undo</span>
                  {historyPast.length > 0 && (
                    <span className="text-[8px] font-mono bg-indigo-500/20 text-indigo-300 px-1 rounded-xs font-bold">
                      {historyPast.length}
                    </span>
                  )}
                </button>
                <div className="w-px h-3 bg-white/10 my-auto" />
                <button
                  onClick={handleRedo}
                  disabled={historyFuture.length === 0}
                  className="flex items-center gap-1.5 px-2.5 py-1 rounded-sm text-[10px] font-medium transition-all text-[#ccc] hover:text-white hover:bg-white/10 disabled:opacity-30 disabled:pointer-events-none disabled:hover:bg-transparent"
                  title={`Redo action (${historyFuture.length} available - Ctrl+Y / Cmd+Shift+Z)`}
                >
                  <RotateCw size={13} className="text-indigo-400" />
                  <span className="hidden md:inline">Redo</span>
                  {historyFuture.length > 0 && (
                    <span className="text-[8px] font-mono bg-indigo-500/20 text-indigo-300 px-1 rounded-xs font-bold">
                      {historyFuture.length}
                    </span>
                  )}
                </button>
              </div>
            )}

            {!isPreviewMode && (
              <button 
                onClick={() => {
                  const next = !showGrid;
                  setShowGrid(next);
                  triggerToast(next ? 'Grid alignment guide enabled' : 'Grid alignment guide hidden');
                }}
                className={`px-2.5 py-1.5 rounded-sm text-[10px] font-medium transition-all flex items-center gap-1.5 border ${
                  showGrid 
                    ? 'bg-indigo-600/30 text-indigo-300 border-indigo-500/40 hover:bg-indigo-600/50' 
                    : 'bg-[#1a1a1a] text-[#888] border-white/10 hover:text-white hover:bg-white/5'
                }`}
                title={showGrid ? "Hide visual grid alignment overlay" : "Show visual grid alignment overlay"}
              >
                <Grid size={13} className={showGrid ? "text-indigo-400" : "text-[#777]"} />
                <span className="hidden sm:inline">Grid Guide</span>
                <span className={`text-[8px] font-mono px-1 rounded-xs uppercase ${showGrid ? 'bg-indigo-500/20 text-indigo-300' : 'bg-white/5 text-[#666]'}`}>
                  {showGrid ? 'ON' : 'OFF'}
                </span>
              </button>
            )}

            <button 
              onClick={() => {
                const next = !isPreviewMode;
                setIsPreviewMode(next);
                if (next) {
                  setSelectedId(null);
                  setFloatingToolbar(null);
                  triggerToast('Entered Preview Mode - UI panels & indicators hidden');
                } else {
                  triggerToast('Exited Preview Mode');
                }
              }} 
              className={`px-3 py-1.5 rounded-sm text-[10px] font-semibold tracking-wider transition-all flex items-center gap-1.5 border ${
                isPreviewMode 
                  ? 'bg-emerald-600 text-white border-emerald-400/50 shadow-md animate-pulse' 
                  : 'bg-indigo-600/20 text-indigo-300 border-indigo-500/30 hover:bg-indigo-600 hover:text-white'
              }`}
              title={isPreviewMode ? "Exit Preview Mode" : "Preview site layout without UI panels"}
            >
              {isPreviewMode ? <EyeOff size={13} /> : <Eye size={13} />}
              <span>{isPreviewMode ? 'EXIT PREVIEW' : 'PREVIEW MODE'}</span>
            </button>
            <button onClick={() => setCurrentView('dashboard')} className="bg-white/5 border border-white/10 px-4 py-1.5 rounded-none text-[10px] tracking-widest hover:bg-white/10 transition-colors font-normal shrink-0">Publish</button>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto p-8 flex flex-col items-center justify-start custom-scrollbar font-normal" onClick={() => { setSelectedId(null); setFloatingToolbar(null); }}>
           <div className="w-full flex flex-col items-center font-normal">
             <BlueTrigger />

             {/* Dynamic Canvas Top Bar Indicator */}
             {!isPreviewMode && (
               <div 
                 className="mb-2 flex items-center justify-between px-3 py-1 bg-[#1a1a1a] border border-white/10 rounded-sm text-[10px] text-[#888] font-mono shadow-md transition-all duration-300" 
                 style={{ width: `${canvasWidth}px`, maxWidth: '100%' }}
               >
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
                    <span className="text-white font-medium capitalize">
                      {viewMode === 'desktop' ? 'Desktop Viewport' : viewMode === 'tablet' ? 'Tablet Viewport' : viewMode === 'mobile-landscape' ? 'Mobile Landscape Viewport' : 'Mobile Portrait Viewport'}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-indigo-400 font-bold">{canvasWidth}px</span>
                    <button 
                      onClick={() => handleSetViewMode('desktop')} 
                      className="text-[9px] text-[#666] hover:text-white uppercase transition-colors"
                      title="Reset to 1200px Desktop width"
                    >
                      Reset
                    </button>
                  </div>
               </div>
             )}

             <div 
               className="bg-white shadow-2xl relative transition-all duration-300 border-[6px] border-[#2b2b2b] shadow-[0_10px_30px_rgba(0,0,0,0.5)] rounded-sm flex flex-col mx-auto font-normal shrink-0"
               style={{
                 width: `${canvasWidth}px`,
                 maxWidth: '100%',
                 minHeight: '800px',
               }}
             >
                {/* SUBTLE ALIGNMENT GRID OVERLAY */}
                {!isPreviewMode && showGrid && (
                  <div 
                    className="absolute inset-0 pointer-events-none z-20 transition-opacity duration-200 overflow-hidden"
                    style={{
                      backgroundImage: `
                        linear-gradient(to right, rgba(99, 102, 241, 0.08) 1px, transparent 1px),
                        linear-gradient(to bottom, rgba(99, 102, 241, 0.08) 1px, transparent 1px)
                      `,
                      backgroundSize: '24px 24px',
                    }}
                  >
                    {/* 12-Column Alignment Grid Guide */}
                    <div className="w-full h-full max-w-7xl mx-auto px-4 grid grid-cols-12 gap-4 opacity-40">
                      {Array.from({ length: 12 }).map((_, i) => (
                        <div key={i} className="h-full border-x border-indigo-500/20 bg-indigo-500/[0.015]" />
                      ))}
                    </div>
                  </div>
                )}

                <div className="relative z-10 w-full min-h-[800px] flex flex-col justify-between overflow-y-auto custom-scrollbar font-normal">
                   <div className="w-full flex flex-col flex-1 min-h-[800px]">
                      <BlueTrigger index={0} />
                      {activePage.sections.map((s, idx) => (
                         <React.Fragment key={s.instanceId}>
                            <RenderNode node={s} selectedId={selectedId} onSelect={handleNodeSelect} onDelete={deleteNode} isPreviewMode={isPreviewMode} />
                            <BlueTrigger index={idx + 1} />
                         </React.Fragment>
                      ))}
                   </div>
                   {activePage.sections.length === 0 && (
                      <div className="p-48 flex flex-col items-center gap-6 opacity-10 text-slate-900 pointer-events-none font-normal my-auto">
                         <div className="w-16 h-16 bg-[#2b2b2b]/5 rounded-none flex items-center justify-center font-normal"><PlusCircle size={32} /></div>
                         <p className="text-[10px] tracking-widest uppercase font-normal">Canvas ready</p>
                      </div>
                   )}
                </div>
             </div>
           </div>
        </main>
      </div>

      {!isPreviewMode && (
        <div className="relative flex z-50 shrink-0">
          <button
            onClick={() => setIsRightPanelCollapsed(prev => !prev)}
            className="absolute left-0 -translate-x-full top-20 z-50 w-5 h-12 bg-[#2b2b2b] hover:bg-indigo-600 text-[#888] hover:text-white border border-white/10 border-r-0 rounded-l-md shadow-2xl flex items-center justify-center cursor-pointer transition-all group"
            title={isRightPanelCollapsed ? "Expand Inspector (320px)" : "Collapse Inspector"}
          >
            {isRightPanelCollapsed ? (
              <ChevronLeft size={14} className="text-indigo-400 group-hover:text-white" />
            ) : (
              <ChevronRight size={14} />
            )}
          </button>

          <aside className={`bg-[#2b2b2b] flex flex-col shadow-2xl overflow-hidden border-l border-white/5 font-normal transition-all duration-300 relative ${isRightPanelCollapsed ? 'w-0 border-none opacity-0' : 'w-[320px] opacity-100'}`}>
             <div className="flex items-center gap-2 p-3 border-b border-white/5 bg-[#2b2b2b] font-normal shrink-0">
                <div className="flex bg-[#1a1a1a] p-0.5 rounded-sm flex-1 font-normal border border-white/5">
                   <button onClick={() => setActiveRightTab('style')} className={`flex-1 py-1 text-[9px] font-bold rounded-sm tracking-wide shadow-sm uppercase ${activeRightTab === 'style' ? 'bg-[#333] text-[#f4f4f4]' : 'opacity-40 hover:opacity-100 hover:text-white'}`}>Style</button>
                   <button onClick={() => setActiveRightTab('settings')} className={`flex-1 py-1 text-[9px] font-bold rounded-sm tracking-wide shadow-sm uppercase ${activeRightTab === 'settings' ? 'bg-[#333] text-[#f4f4f4]' : 'opacity-40 hover:opacity-100 hover:text-white'}`}>Settings</button>
                   <button onClick={() => setActiveRightTab('interactions')} className={`flex-1 py-1 text-[9px] font-bold rounded-sm tracking-wide shadow-sm uppercase ${activeRightTab === 'interactions' ? 'bg-[#333] text-[#f4f4f4]' : 'opacity-40 hover:opacity-100 hover:text-white'}`}>Interact</button>
                </div>
             </div>
             <div className="flex-1 overflow-y-auto custom-scrollbar font-normal">
                {activeRightTab === 'style' && renderInspector()}
                {activeRightTab === 'settings' && <div className="p-4 text-xs text-[#999] text-center mt-10">Element Settings</div>}
                {activeRightTab === 'interactions' && <div className="p-4 text-xs text-[#999] text-center mt-10">Interactions Panel</div>}
             </div>
          </aside>
        </div>
      )}

      {/* DELETE PAGE CONFIRMATION MODAL */}
      {pageToDelete && (
        <div className="fixed inset-0 bg-black/75 backdrop-blur-xs z-[200] flex items-center justify-center p-4 animate-in fade-in duration-150">
          <div className="bg-[#1e1e1e] border border-red-500/30 w-full max-w-sm rounded-sm shadow-2xl p-5 space-y-4 text-left">
            <div className="flex items-center gap-3 text-red-400">
              <div className="p-2 bg-red-500/10 rounded-full border border-red-500/20 shrink-0">
                <Trash2 size={18} />
              </div>
              <div>
                <h3 className="text-sm font-bold text-white">Delete Page?</h3>
                <p className="text-[11px] text-[#aaa]">This action cannot be undone.</p>
              </div>
            </div>

            <p className="text-xs text-[#ccc] leading-relaxed">
              Are you sure you want to permanently delete page <strong className="text-white">"{pageToDelete.name}"</strong>?
            </p>

            <div className="flex items-center justify-end gap-2 pt-3 border-t border-white/10">
              <button 
                onClick={() => setPageToDelete(null)}
                className="px-3 py-1.5 bg-[#2b2b2b] hover:bg-[#333] text-white text-xs font-medium rounded-sm cursor-pointer transition-colors"
              >
                Cancel
              </button>
              <button 
                onClick={confirmDeletePage}
                className="px-3 py-1.5 bg-red-600 hover:bg-red-500 text-white text-xs font-medium rounded-sm shadow-md cursor-pointer transition-colors"
              >
                Delete Page
              </button>
            </div>
          </div>
        </div>
      )}

      {/* DELETE FOLDER CONFIRMATION MODAL */}
      {folderToDelete && (
        <div className="fixed inset-0 bg-black/75 backdrop-blur-xs z-[200] flex items-center justify-center p-4 animate-in fade-in duration-150">
          <div className="bg-[#1e1e1e] border border-amber-500/30 w-full max-w-sm rounded-sm shadow-2xl p-5 space-y-4 text-left">
            <div className="flex items-center gap-3 text-amber-400">
              <div className="p-2 bg-amber-500/10 rounded-full border border-amber-500/20 shrink-0">
                <Folder size={18} />
              </div>
              <div>
                <h3 className="text-sm font-bold text-white">Delete Folder?</h3>
                <p className="text-[11px] text-[#aaa]">Contained pages will be moved out of the folder.</p>
              </div>
            </div>

            <p className="text-xs text-[#ccc] leading-relaxed">
              Are you sure you want to delete folder <strong className="text-white">"{folderToDelete.name}"</strong>? Contained pages will remain accessible.
            </p>

            <div className="flex items-center justify-end gap-2 pt-3 border-t border-white/10">
              <button 
                onClick={() => setFolderToDelete(null)}
                className="px-3 py-1.5 bg-[#2b2b2b] hover:bg-[#333] text-white text-xs font-medium rounded-sm cursor-pointer transition-colors"
              >
                Cancel
              </button>
              <button 
                onClick={confirmDeleteFolder}
                className="px-3 py-1.5 bg-amber-600 hover:bg-amber-500 text-white text-xs font-medium rounded-sm shadow-md cursor-pointer transition-colors"
              >
                Delete Folder
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
