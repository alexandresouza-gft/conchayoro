terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.98"
    }
  }

  backend "s3" {
    bucket         = "conchayoro-ads"
    key            = "terraform/state/infra.tfstate"
    region         = "us-east-1"
    encrypt        = true
  }

}

provider "aws" {
  region = var.AWS_REGION
}
