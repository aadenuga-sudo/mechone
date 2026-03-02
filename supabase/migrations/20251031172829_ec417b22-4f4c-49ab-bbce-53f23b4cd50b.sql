-- Create components table for storing generated mechanical component specifications
CREATE TABLE IF NOT EXISTS public.components (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  component_name TEXT NOT NULL,
  component_type TEXT NOT NULL,
  specifications JSONB NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now() NOT NULL
);

-- Enable Row Level Security
ALTER TABLE public.components ENABLE ROW LEVEL SECURITY;

-- Create policies for public access (no auth required)
CREATE POLICY "Allow public read access" ON public.components
  FOR SELECT USING (true);

CREATE POLICY "Allow public insert access" ON public.components
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow public delete access" ON public.components
  FOR DELETE USING (true);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_components_type ON public.components(component_type);
CREATE INDEX IF NOT EXISTS idx_components_created ON public.components(created_at DESC);