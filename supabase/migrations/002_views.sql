-- =====================================================
-- Database Views for DiziPro Portfolio
-- Migration: 002_views
-- =====================================================

-- =====================================================
-- ALL PROJECTS VIEW
-- Aggregates projects with their child images
-- =====================================================

CREATE OR REPLACE VIEW all_projects_view AS
SELECT 
    p.id,
    p.name,
    p.src,
    p.project_id,
    p.is_top,
    p.created_at,
    p.updated_at,
    COALESCE(
        JSON_AGG(
            JSON_BUILD_OBJECT(
                'id', child.id,
                'name', child.name,
                'src', child.src,
                'project_id', child.project_id
            ) ORDER BY child.created_at
        ) FILTER (WHERE child.id IS NOT NULL),
        '[]'::json
    ) AS images
FROM 
    projects p
LEFT JOIN 
    projects child ON p.id = child.project_id
WHERE 
    p.project_id IS NULL  -- Only parent projects
GROUP BY 
    p.id, p.name, p.src, p.project_id, p.is_top, p.created_at, p.updated_at;

-- =====================================================
-- CATEGORY PROJECTS VIEW  
-- Filters projects by category with child images
-- =====================================================

CREATE OR REPLACE VIEW category_projects_view AS
SELECT 
    p.id,
    p.name,
    p.src,
    p.project_id,
    p.category_id,
    p.is_top,
    p.created_at,
    p.updated_at,
    c.name_en AS category_name_en,
    c.name_ru AS category_name_ru,
    c.name_uz AS category_name_uz,
    COALESCE(
        JSON_AGG(
            JSON_BUILD_OBJECT(
                'id', child.id,
                'name', child.name,
                'src', child.src,
                'project_id', child.project_id
            ) ORDER BY child.created_at
        ) FILTER (WHERE child.id IS NOT NULL),
        '[]'::json
    ) AS images
FROM 
    projects p
INNER JOIN 
    categories c ON p.category_id = c.id
LEFT JOIN 
    projects child ON p.id = child.project_id
GROUP BY 
    p.id, p.name, p.src, p.project_id, p.category_id, p.is_top, 
    p.created_at, p.updated_at, c.name_en, c.name_ru, c.name_uz;

-- =====================================================
-- PERFORMANCE OPTIMIZATION
-- =====================================================

-- Create indexes on views for better performance
CREATE INDEX IF NOT EXISTS idx_all_projects_view_is_top 
ON projects(is_top, created_at DESC) 
WHERE project_id IS NULL;

CREATE INDEX IF NOT EXISTS idx_category_projects_view_category 
ON projects(category_id, created_at DESC) 
WHERE project_id IS NULL;
