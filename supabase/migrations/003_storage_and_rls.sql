-- =====================================================
-- Storage Buckets and RLS Policies
-- Migration: 003_storage_and_rls
-- =====================================================

-- =====================================================
-- STORAGE BUCKET
-- =====================================================

-- Create storage bucket for images (run this via Supabase Dashboard or CLI)
-- INSERT INTO storage.buckets (id, name, public) 
-- VALUES ('images', 'images', true);

-- =====================================================
-- ROW LEVEL SECURITY (RLS)
-- =====================================================

-- Enable RLS on all tables
ALTER TABLE categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;

-- =====================================================
-- RLS POLICIES - CATEGORIES
-- =====================================================

-- Allow public read access to categories
CREATE POLICY "Allow public read access to categories" 
ON categories FOR SELECT 
TO anon, authenticated 
USING (true);

-- Allow authenticated users to manage categories
CREATE POLICY "Allow authenticated users to manage categories" 
ON categories FOR ALL 
TO authenticated 
USING (true);

-- =====================================================
-- RLS POLICIES - PROJECTS
-- =====================================================

-- Allow public read access to projects
CREATE POLICY "Allow public read access to projects" 
ON projects FOR SELECT 
TO anon, authenticated 
USING (true);

-- Allow authenticated users to insert projects
CREATE POLICY "Allow authenticated users to insert projects" 
ON projects FOR INSERT 
TO authenticated 
WITH CHECK (true);

-- Allow authenticated users to update their projects
CREATE POLICY "Allow authenticated users to update projects" 
ON projects FOR UPDATE 
TO authenticated 
USING (true);

-- Allow authenticated users to delete projects
CREATE POLICY "Allow authenticated users to delete projects" 
ON projects FOR DELETE 
TO authenticated 
USING (true);

-- =====================================================
-- STORAGE POLICIES
-- =====================================================

-- Allow public read access to images
CREATE POLICY "Allow public read access to images" 
ON storage.objects FOR SELECT 
TO anon, authenticated 
USING (bucket_id = 'images');

-- Allow authenticated users to upload images
CREATE POLICY "Allow authenticated users to upload images" 
ON storage.objects FOR INSERT 
TO authenticated 
WITH CHECK (
    bucket_id = 'images' 
    AND (storage.foldername(name))[1] ~ '^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$'
);

-- Allow authenticated users to update images
CREATE POLICY "Allow authenticated users to update images" 
ON storage.objects FOR UPDATE 
TO authenticated 
USING (bucket_id = 'images');

-- Allow authenticated users to delete images
CREATE POLICY "Allow authenticated users to delete images" 
ON storage.objects FOR DELETE 
TO authenticated 
USING (bucket_id = 'images');
