-- =====================================================
-- Seed Data for DiziPro Portfolio
-- =====================================================

-- =====================================================
-- CATEGORIES
-- =====================================================

INSERT INTO categories (name_en, name_ru, name_uz) VALUES
('Furniture', 'Мебель', 'Mebel'),
('Technology', 'Технологии', 'Texnologiya'),
('Interior', 'Интерьер', 'Interyer'),
('Plants', 'Растения', 'Oʻsimliklar'),
('Clothing', 'Одежда', 'Kiyim'),
('Character', 'Персонажи', 'Personaj'),
('Decoration', 'Декор', 'Bezash'),
('Vehicle', 'Транспорт', 'Transport')
ON CONFLICT DO NOTHING;

-- =====================================================
-- SAMPLE PROJECTS (Optional - for testing)
-- =====================================================

-- Uncomment below to add sample data for testing
/*
INSERT INTO projects (name, src, category_id, is_top) VALUES
('Modern Villa', '/storage/v1/object/public/images/sample/villa1.jpg', 1, true),
('Office Complex', '/storage/v1/object/public/images/sample/office1.jpg', 5, true),
('City Park Design', '/storage/v1/object/public/images/sample/park1.jpg', 3, false),
('Apartment Interior', '/storage/v1/object/public/images/sample/interior1.jpg', 2, true)
ON CONFLICT DO NOTHING;
*/
