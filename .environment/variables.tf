variable "AWS_REGION" {
  type        = string
  description = "Região AWS onde os recursos serão provisionados (ex: us-east-1)"
  default     = "us-east-1"
}

variable "PROJECT_NAME" {
  type        = string
  description = "Nome do projeto"
}

variable "MODULE_NAME" {
  type        = string
  description = "Nome do módulo ou componente da aplicação"
}

variable "SOLUTION_STACK_NAME" {
  type        = string
  description = "Elastic Beanstalk Solution Stack (ex.: 64bit Amazon Linux 2023 v4.1.0 running Docker)"
}

variable "EnvironmentType" {
  type        = string
  description = "Tipo de ambiente do Elastic Beanstalk: SingleInstance ou LoadBalanced"
  default     = "SingleInstance"
}

variable "LoadBalancerType" {
  type        = string
  description = "Tipo de Load Balancer utilizado: application (ALB) ou network (NLB)"
  default     = "application"
}

variable "MinSize" {
  type        = number
  description = "Número mínimo de instâncias no Auto Scaling"
  default     = 1
}

variable "MaxSize" {
  type        = number
  description = "Número máximo de instâncias no Auto Scaling"
  default     = 1
}

variable "DeploymentPolicy" {
  type        = string
  description = "Política de deployment: AllAtOnce, Rolling, RollingWithAdditionalBatch, Immutable ou TrafficSplitting"
  default     = "AllAtOnce"
}

variable "BatchSizeType" {
  type        = string
  description = "Tipo de batch no deployment: Fixed ou Percentage"
  default     = "Fixed"
}

variable "BatchSize" {
  type        = number
  description = "Tamanho do batch, como valor absoluto (Fixed) ou percentual (Percentage)"
  default     = 50
}

variable "Timeout" {
  type        = number
  description = "Tempo limite do deployment em segundos (ex.: 3600 para uma hora)"
  default     = 3600
}
