import { useEffect, useState } from 'react';
import { ArrowLeft, Send, FileText, DollarSign, Shield, Briefcase, CheckCircle } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';

interface FormData {
  // Contact Info
  name: string;
  email: string;
  company: string;
  phone: string;
  
  // Project Overview
  projectTitle: string;
  projectDescription: string;
  projectType: string;
  
  // Scope of Work
  deliverables: string;
  timeline: string;
  milestones: string;
  
  // Technical Requirements
  techStack: string;
  integrations: string;
  complianceRequirements: string[];
  
  // Budget
  budgetRange: string;
  budgetDetails: string;
  
  // Assets & Media
  hasExistingAssets: boolean;
  assetDescription: string;
  
  // MNDA
  requestMNDA: boolean;
  mndaSigned: boolean;
}

const initialFormData: FormData = {
  name: '',
  email: '',
  company: '',
  phone: '',
  projectTitle: '',
  projectDescription: '',
  projectType: '',
  deliverables: '',
  timeline: '',
  milestones: '',
  techStack: '',
  integrations: '',
  complianceRequirements: [],
  budgetRange: '',
  budgetDetails: '',
  hasExistingAssets: false,
  assetDescription: '',
  requestMNDA: false,
  mndaSigned: false,
};

const complianceOptions = [
  { id: 'hipaa', label: 'HIPAA / Healthcare' },
  { id: 'soc2', label: 'SOC 2' },
  { id: 'gdpr', label: 'GDPR' },
  { id: 'pci', label: 'PCI DSS' },
  { id: 'fedramp', label: 'FedRAMP' },
  { id: 'iso27001', label: 'ISO 27001' },
  { id: 'other', label: 'Other (specify in details)' },
];

const budgetRanges = [
  { value: '10k-25k', label: '$10,000 - $25,000' },
  { value: '25k-50k', label: '$25,000 - $50,000' },
  { value: '50k-100k', label: '$50,000 - $100,000' },
  { value: '100k-250k', label: '$100,000 - $250,000' },
  { value: '250k-500k', label: '$250,000 - $500,000' },
  { value: '500k+', label: '$500,000+' },
  { value: 'discuss', label: 'Prefer to discuss' },
];

const projectTypes = [
  { value: 'new-product', label: 'New Product Development' },
  { value: 'legacy-integration', label: 'Legacy System Integration' },
  { value: 'ai-ml', label: 'AI/ML Implementation' },
  { value: 'data-pipeline', label: 'Data Pipeline/ETL' },
  { value: 'api-development', label: 'API Development' },
  { value: 'infrastructure', label: 'Infrastructure/DevOps' },
  { value: 'consulting', label: 'Technical Consulting' },
  { value: 'other', label: 'Other' },
];

export function ProjectIntake() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [currentStep, setCurrentStep] = useState(1);
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);
  const [showMNDADialog, setShowMNDADialog] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const updateField = (field: keyof FormData, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const toggleCompliance = (id: string) => {
    setFormData(prev => ({
      ...prev,
      complianceRequirements: prev.complianceRequirements.includes(id)
        ? prev.complianceRequirements.filter(r => r !== id)
        : [...prev.complianceRequirements, id]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Encode form data for Netlify
    const formDataToSubmit = new FormData();
    formDataToSubmit.append('form-name', 'project-intake');
    formDataToSubmit.append('bot-field', ''); // Honeypot field
    formDataToSubmit.append('name', formData.name);
    formDataToSubmit.append('email', formData.email);
    formDataToSubmit.append('company', formData.company);
    formDataToSubmit.append('phone', formData.phone);
    formDataToSubmit.append('projectTitle', formData.projectTitle);
    formDataToSubmit.append('projectDescription', formData.projectDescription);
    formDataToSubmit.append('projectType', formData.projectType);
    formDataToSubmit.append('deliverables', formData.deliverables);
    formDataToSubmit.append('timeline', formData.timeline);
    formDataToSubmit.append('milestones', formData.milestones);
    formDataToSubmit.append('techStack', formData.techStack);
    formDataToSubmit.append('integrations', formData.integrations);
    formDataToSubmit.append('complianceRequirements', formData.complianceRequirements.join(', '));
    formDataToSubmit.append('budgetRange', formData.budgetRange);
    formDataToSubmit.append('budgetDetails', formData.budgetDetails);
    formDataToSubmit.append('hasExistingAssets', formData.hasExistingAssets ? 'true' : 'false');
    formDataToSubmit.append('assetDescription', formData.assetDescription);
    formDataToSubmit.append('requestMNDA', formData.requestMNDA ? 'true' : 'false');
    formDataToSubmit.append('mndaSigned', formData.mndaSigned ? 'true' : 'false');
    
    // Submit to Netlify
    fetch('/', {
      method: 'POST',
      body: formDataToSubmit,
    })
    .then(() => {
      setShowSuccessDialog(true);
    })
    .catch((error) => {
      console.error('Form submission error:', error);
      alert('There was an error submitting your project. Please try again or email us directly at hello@shrubnet.com');
    });
  };

  const steps = [
    { number: 1, title: 'Contact Info', icon: Briefcase },
    { number: 2, title: 'Project Overview', icon: FileText },
    { number: 3, title: 'Scope & Deliverables', icon: CheckCircle },
    { number: 4, title: 'Technical Specs', icon: Shield },
    { number: 5, title: 'Budget & Assets', icon: DollarSign },
    { number: 6, title: 'Review & Submit', icon: Send },
  ];

  const isStepValid = (step: number): boolean => {
    switch (step) {
      case 1:
        return formData.name.trim() !== '' && formData.email.trim() !== '';
      case 2:
        return formData.projectTitle.trim() !== '' && formData.projectType !== '';
      case 3:
        return formData.deliverables.trim() !== '';
      case 4:
        return true; // Optional fields
      case 5:
        return formData.budgetRange !== '';
      default:
        return true;
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="section-padding py-6 border-b border-subtle sticky top-0 bg-background/95 backdrop-blur-sm z-50">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <a 
            href="/#/" 
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-emerald transition-colors duration-300"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Shrubnet
          </a>
          <span className="text-sm font-medium text-foreground">Submit a Project</span>
        </div>
      </header>

      {/* Progress Bar */}
      <div className="bg-secondary/30 border-b border-subtle">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {steps.map((step, index) => {
              const isActive = currentStep === step.number;
              const isCompleted = currentStep > step.number;
              
              return (
                <div key={step.number} className="flex items-center">
                  <button
                    onClick={() => isCompleted && setCurrentStep(step.number)}
                    className={`flex items-center gap-2 px-3 py-2 rounded-sm transition-all duration-300 ${
                      isActive 
                        ? 'bg-emerald/10 text-emerald' 
                        : isCompleted 
                          ? 'text-emerald/70 hover:bg-emerald/5' 
                          : 'text-muted-foreground'
                    }`}
                  >
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${
                      isActive 
                        ? 'bg-emerald text-background' 
                        : isCompleted 
                          ? 'bg-emerald/50 text-background' 
                          : 'bg-muted text-muted-foreground'
                    }`}>
                      {isCompleted ? <CheckCircle className="w-4 h-4" /> : step.number}
                    </div>
                    <span className="hidden md:inline text-sm font-medium">{step.title}</span>
                  </button>
                  {index < steps.length - 1 && (
                    <div className={`w-8 md:w-12 h-px mx-2 ${
                      isCompleted ? 'bg-emerald/50' : 'bg-border'
                    }`} />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main Form */}
      <main className="section-padding py-12">
        <div className="max-w-3xl mx-auto">
          <form onSubmit={handleSubmit}>
            {/* Step 1: Contact Info */}
            {currentStep === 1 && (
              <div className="space-y-6 animate-fade-in">
                <div>
                  <h2 className="text-2xl font-medium text-foreground mb-2">Let's start with your contact information</h2>
                  <p className="text-muted-foreground">We'll use this to follow up on your project.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => updateField('name', e.target.value)}
                      placeholder="John Smith"
                      className="bg-card border-subtle"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => updateField('email', e.target.value)}
                      placeholder="john@company.com"
                      className="bg-card border-subtle"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company">Company / Organization</Label>
                    <Input
                      id="company"
                      value={formData.company}
                      onChange={(e) => updateField('company', e.target.value)}
                      placeholder="Acme Inc."
                      className="bg-card border-subtle"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => updateField('phone', e.target.value)}
                      placeholder="+1 (555) 123-4567"
                      className="bg-card border-subtle"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Project Overview */}
            {currentStep === 2 && (
              <div className="space-y-6 animate-fade-in">
                <div>
                  <h2 className="text-2xl font-medium text-foreground mb-2">Tell us about your project</h2>
                  <p className="text-muted-foreground">Help us understand what you're looking to build.</p>
                </div>

                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="projectTitle">Project Title *</Label>
                    <Input
                      id="projectTitle"
                      value={formData.projectTitle}
                      onChange={(e) => updateField('projectTitle', e.target.value)}
                      placeholder="e.g., Legacy EMR Integration with AI Agents"
                      className="bg-card border-subtle"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="projectType">Project Type *</Label>
                    <Select value={formData.projectType} onValueChange={(value) => updateField('projectType', value)}>
                      <SelectTrigger className="bg-card border-subtle">
                        <SelectValue placeholder="Select project type" />
                      </SelectTrigger>
                      <SelectContent>
                        {projectTypes.map(type => (
                          <SelectItem key={type.value} value={type.value}>{type.label}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="projectDescription">Project Description</Label>
                    <Textarea
                      id="projectDescription"
                      value={formData.projectDescription}
                      onChange={(e) => updateField('projectDescription', e.target.value)}
                      placeholder="Describe your project, goals, and any specific challenges you're facing..."
                      className="bg-card border-subtle min-h-[150px]"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Scope & Deliverables */}
            {currentStep === 3 && (
              <div className="space-y-6 animate-fade-in">
                <div>
                  <h2 className="text-2xl font-medium text-foreground mb-2">Scope of Work & Deliverables</h2>
                  <p className="text-muted-foreground">Define what success looks like for this project.</p>
                </div>

                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="deliverables">Expected Deliverables *</Label>
                    <Textarea
                      id="deliverables"
                      value={formData.deliverables}
                      onChange={(e) => updateField('deliverables', e.target.value)}
                      placeholder="List the specific deliverables you expect: working system, documentation, training, source code, etc."
                      className="bg-card border-subtle min-h-[120px]"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="timeline">Target Timeline</Label>
                    <Select value={formData.timeline} onValueChange={(value) => updateField('timeline', value)}>
                      <SelectTrigger className="bg-card border-subtle">
                        <SelectValue placeholder="Select target timeline" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1-3-months">1-3 months</SelectItem>
                        <SelectItem value="3-6-months">3-6 months</SelectItem>
                        <SelectItem value="6-12-months">6-12 months</SelectItem>
                        <SelectItem value="12+-months">12+ months</SelectItem>
                        <SelectItem value="ongoing">Ongoing / Retainer</SelectItem>
                        <SelectItem value="flexible">Flexible</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="milestones">Key Milestones (Optional)</Label>
                    <Textarea
                      id="milestones"
                      value={formData.milestones}
                      onChange={(e) => updateField('milestones', e.target.value)}
                      placeholder="e.g., Phase 1: Architecture design, Phase 2: MVP development, Phase 3: Production deployment"
                      className="bg-card border-subtle min-h-[100px]"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 4: Technical Specs */}
            {currentStep === 4 && (
              <div className="space-y-6 animate-fade-in">
                <div>
                  <h2 className="text-2xl font-medium text-foreground mb-2">Technical Requirements</h2>
                  <p className="text-muted-foreground">Help us understand the technical landscape.</p>
                </div>

                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="techStack">Preferred or Existing Tech Stack</Label>
                    <Textarea
                      id="techStack"
                      value={formData.techStack}
                      onChange={(e) => updateField('techStack', e.target.value)}
                      placeholder="e.g., React, Node.js, PostgreSQL, AWS, or any legacy systems we need to integrate with"
                      className="bg-card border-subtle min-h-[100px]"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="integrations">Required Integrations</Label>
                    <Textarea
                      id="integrations"
                      value={formData.integrations}
                      onChange={(e) => updateField('integrations', e.target.value)}
                      placeholder="e.g., Salesforce, Stripe, Epic EMR, internal APIs, third-party services..."
                      className="bg-card border-subtle min-h-[100px]"
                    />
                  </div>

                  <div className="space-y-3">
                    <Label>Compliance Requirements</Label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {complianceOptions.map(option => (
                        <div key={option.id} className="flex items-center space-x-2">
                          <Checkbox
                            id={option.id}
                            checked={formData.complianceRequirements.includes(option.id)}
                            onCheckedChange={() => toggleCompliance(option.id)}
                          />
                          <label htmlFor={option.id} className="text-sm text-muted-foreground cursor-pointer">
                            {option.label}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 5: Budget & Assets */}
            {currentStep === 5 && (
              <div className="space-y-6 animate-fade-in">
                <div>
                  <h2 className="text-2xl font-medium text-foreground mb-2">Budget & Resources</h2>
                  <p className="text-muted-foreground">Help us understand your investment range and available materials.</p>
                </div>

                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="budgetRange">Budget Range *</Label>
                    <Select value={formData.budgetRange} onValueChange={(value) => updateField('budgetRange', value)}>
                      <SelectTrigger className="bg-card border-subtle">
                        <SelectValue placeholder="Select budget range" />
                      </SelectTrigger>
                      <SelectContent>
                        {budgetRanges.map(range => (
                          <SelectItem key={range.value} value={range.value}>{range.label}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="budgetDetails">Budget Notes (Optional)</Label>
                    <Textarea
                      id="budgetDetails"
                      value={formData.budgetDetails}
                      onChange={(e) => updateField('budgetDetails', e.target.value)}
                      placeholder="Any additional context about budget: payment terms, phased approach, equity component, etc."
                      className="bg-card border-subtle min-h-[100px]"
                    />
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="hasExistingAssets"
                        checked={formData.hasExistingAssets}
                        onCheckedChange={(checked) => updateField('hasExistingAssets', checked)}
                      />
                      <label htmlFor="hasExistingAssets" className="text-sm text-muted-foreground cursor-pointer">
                        We have existing assets, documentation, or code to share
                      </label>
                    </div>

                    {formData.hasExistingAssets && (
                      <div className="space-y-2 pl-6">
                        <Label htmlFor="assetDescription">Asset Description</Label>
                        <Textarea
                          id="assetDescription"
                          value={formData.assetDescription}
                          onChange={(e) => updateField('assetDescription', e.target.value)}
                          placeholder="Describe what you have: design files, API docs, existing codebase, data samples, etc."
                          className="bg-card border-subtle min-h-[100px]"
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Step 6: Review & MNDA */}
            {currentStep === 6 && (
              <div className="space-y-6 animate-fade-in">
                <div>
                  <h2 className="text-2xl font-medium text-foreground mb-2">Review & Submit</h2>
                  <p className="text-muted-foreground">Review your project details and optionally request an MNDA.</p>
                </div>

                {/* Summary */}
                <div className="bg-card/50 border border-subtle rounded-sm p-6 space-y-4">
                  <h3 className="font-medium text-foreground">Project Summary</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-muted-foreground">Contact:</span>
                      <p className="text-foreground">{formData.name} ({formData.email})</p>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Company:</span>
                      <p className="text-foreground">{formData.company || 'Not specified'}</p>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Project:</span>
                      <p className="text-foreground">{formData.projectTitle}</p>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Type:</span>
                      <p className="text-foreground">{projectTypes.find(t => t.value === formData.projectType)?.label || 'Not specified'}</p>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Budget:</span>
                      <p className="text-foreground">{budgetRanges.find(b => b.value === formData.budgetRange)?.label || 'Not specified'}</p>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Timeline:</span>
                      <p className="text-foreground">{formData.timeline ? formData.timeline.replace(/-/g, ' ') : 'Not specified'}</p>
                    </div>
                  </div>
                </div>

                {/* MNDA Section */}
                <div className="border border-subtle rounded-sm p-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-emerald mt-0.5" />
                    <div>
                      <h3 className="font-medium text-foreground">Mutual Non-Disclosure Agreement</h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        If your project involves sensitive information, you may request an MNDA before sharing detailed specifications.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="requestMNDA"
                      checked={formData.requestMNDA}
                      onCheckedChange={(checked) => {
                        updateField('requestMNDA', checked);
                        if (checked) setShowMNDADialog(true);
                      }}
                    />
                    <label htmlFor="requestMNDA" className="text-sm text-muted-foreground cursor-pointer">
                      Request an MNDA before project discussion
                    </label>
                  </div>

                  {formData.requestMNDA && (
                    <div className="pl-6 space-y-3">
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="mndaSigned"
                          checked={formData.mndaSigned}
                          onCheckedChange={(checked) => updateField('mndaSigned', checked)}
                        />
                        <label htmlFor="mndaSigned" className="text-sm text-muted-foreground cursor-pointer">
                          I understand that an MNDA will be sent to {formData.email} for electronic signature
                        </label>
                      </div>
                      <p className="text-xs text-slate">
                        By requesting an MNDA, you acknowledge that Shrubnet will send a standard mutual non-disclosure agreement 
                        via our electronic signature provider. Project discussions will begin after both parties have executed the agreement.
                      </p>
                    </div>
                  )}
                </div>

                {/* Disclaimers */}
                <div className="text-xs text-slate space-y-2">
                  <p>
                    <strong>Submission Review:</strong> All project submissions are reviewed within 2-3 business days. 
                    We may reach out for additional information before providing a proposal.
                  </p>
                  <p>
                    <strong>No Obligation:</strong> Submitting this form does not constitute a binding agreement. 
                    Project terms, scope, and pricing will be formalized in a separate Statement of Work.
                  </p>
                  <p>
                    <strong>Confidentiality:</strong> Information submitted through this form is treated as confidential 
                    and will only be used to evaluate and respond to your project inquiry.
                  </p>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between pt-8 mt-8 border-t border-subtle">
              {currentStep > 1 ? (
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setCurrentStep(currentStep - 1)}
                  className="border-subtle hover:border-emerald/50"
                >
                  Previous
                </Button>
              ) : (
                <div />
              )}

              {currentStep < 6 ? (
                <Button
                  type="button"
                  onClick={() => setCurrentStep(currentStep + 1)}
                  disabled={!isStepValid(currentStep)}
                  className="bg-emerald hover:bg-emerald/90 text-background"
                >
                  Next Step
                </Button>
              ) : (
                <Button
                  type="submit"
                  className="bg-emerald hover:bg-emerald/90 text-background"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Submit Project
                </Button>
              )}
            </div>
          </form>
        </div>
      </main>

      {/* MNDA Dialog */}
      <Dialog open={showMNDADialog} onOpenChange={setShowMNDADialog}>
        <DialogContent className="bg-card border-border/50 max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-foreground text-lg font-medium">
              Mutual Non-Disclosure Agreement Summary
            </DialogTitle>
            <DialogDescription className="text-muted-foreground text-sm">
              Standard terms for protecting confidential information
            </DialogDescription>
          </DialogHeader>
          <div className="pt-4 space-y-4 text-sm text-muted-foreground">
            <div className="bg-secondary/30 p-4 rounded-sm space-y-3">
              <h4 className="font-medium text-foreground">Key Terms</h4>
              <ul className="space-y-2">
                <li>• <strong>Definition of Confidential Information:</strong> All non-public, proprietary, or confidential information disclosed by either party.</li>
                <li>• <strong>Obligations of Receiving Party:</strong> Maintain confidentiality, use only for evaluation purposes, limit disclosure to need-to-know personnel.</li>
                <li>• <strong>Term:</strong> Agreement remains in effect for 3 years from execution date.</li>
                <li>• <strong>Return of Information:</strong> Upon request, all confidential materials must be returned or destroyed.</li>
                <li>• <strong>Remedies:</strong> Both parties acknowledge that breach may cause irreparable harm warranting injunctive relief.</li>
              </ul>
            </div>
            <p className="text-xs text-slate">
              The full MNDA will be sent to {formData.email} for electronic signature via DocuSign or similar platform. 
              This summary is provided for informational purposes only and does not constitute legal advice.
            </p>
            <Button 
              onClick={() => setShowMNDADialog(false)}
              className="w-full bg-emerald hover:bg-emerald/90 text-background"
            >
              I Understand
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Success Dialog */}
      <Dialog open={showSuccessDialog} onOpenChange={setShowSuccessDialog}>
        <DialogContent className="bg-card border-border/50 max-w-md">
          <DialogHeader>
            <DialogTitle className="text-foreground text-lg font-medium flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-emerald" />
              Project Submitted
            </DialogTitle>
            <DialogDescription className="text-muted-foreground text-sm">
              Thank you for submitting your project to Shrubnet.
            </DialogDescription>
          </DialogHeader>
          <div className="pt-4 space-y-4">
            <p className="text-sm text-muted-foreground">
              We've received your project details and will review them within 2-3 business days. 
              {formData.requestMNDA && ' An MNDA will be sent to your email shortly.'}
            </p>
            <p className="text-sm text-muted-foreground">
              A confirmation email has been sent to <strong className="text-foreground">{formData.email}</strong>.
            </p>
            <div className="bg-secondary/30 p-4 rounded-sm">
              <p className="text-xs text-slate">
                <strong>Project ID:</strong> SHR-{Date.now().toString(36).toUpperCase().slice(-8)}
              </p>
              <p className="text-xs text-slate mt-1">
                Reference this ID in any follow-up communications.
              </p>
            </div>
            <a 
              href="/#/"
              className="block w-full text-center px-4 py-2 bg-emerald hover:bg-emerald/90 text-background rounded-sm transition-colors"
            >
              Return to Homepage
            </a>
          </div>
        </DialogContent>
      </Dialog>

      {/* Footer */}
      <footer className="section-padding py-8 border-t border-subtle">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate">
            © {new Date().getFullYear()} Shrubnet, LLC
          </p>
          <div className="flex gap-6">
            <a href="/#/privacy" className="text-xs text-muted-foreground hover:text-emerald transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="/#/terms" className="text-xs text-muted-foreground hover:text-emerald transition-colors duration-300">
              Terms of Service
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
